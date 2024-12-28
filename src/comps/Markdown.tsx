import { Marked } from "marked";
import { twMerge } from "tailwind-merge";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
import { createSignal, onMount, splitProps } from "solid-js";
import { nanoid } from "nanoid";
import { toast } from "@/utils";

interface IMarkdownProps {
  raw: string;
  class?: string;
}

export default function Markdown(props: IMarkdownProps) {
  const [getIdList, setIdList] = createSignal<Array<string>>([]);
  const marked = new Marked(
    markedHighlight({
      async: false,
      highlight: (code, lang) => {
        const id = nanoid();
        setIdList((idList) => [...idList, id]);
        const highlightCode = hljs.highlight(code, { language: lang }).value;
        const handler = `<div class="relative"><button class="absolute border text-blue-500 px-2 py-1 right-0 top-0" id=${id} data-copy-text='${JSON.stringify(code)}'>复制${lang}</button>${highlightCode}</div>`;
        return handler;
      },
    }),
  );
  const [knownProps, restProps] = splitProps(props, ["raw", "class"]);
  const markdownValue = marked.parse(knownProps.raw, {}) as any as string;

  onMount(() => {
    /**
     * 拷贝
     */
    getIdList().forEach((id) => {
      document.getElementById(id)!.onclick = async function (e) {
        const target = e.target as any as HTMLElement;
        await navigator.clipboard.writeText(
          JSON.parse(target.dataset.copyText!),
        );
        const left = e.clientX;
        const top = e.clientY;

        toast({
          left,
          top,
          message: "拷贝成功",
        });
      };
    });
  });

  return (
    <>
      <div
        class={twMerge("prose max-w-full", knownProps.class)}
        innerHTML={markdownValue}
        {...restProps}
      ></div>
    </>
  );
}
