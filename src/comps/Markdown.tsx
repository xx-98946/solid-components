import { Marked } from "marked";
import { twMerge } from "tailwind-merge";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";
import { splitProps } from "solid-js";

interface IMarkdownProps {
  raw: string;
  class?: string;
}
export default function Markdown(props: IMarkdownProps) {
  const marked = new Marked(
    markedHighlight({
      async: false,
      highlight: (code, lang) => {
        return hljs.highlight(code, { language: lang }).value;
      },
    }),
  );
  const [knownProps, restProps] = splitProps(props, ["raw", "class"]);
  const markdownValue = marked.parse(knownProps.raw, {}) as any as string;

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
