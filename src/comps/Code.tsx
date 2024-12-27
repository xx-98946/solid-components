import { marked } from "marked";
import { twMerge } from "tailwind-merge";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
// import { createSignal, onMount } from "solid-js";

interface IMarkdownProps {
  raw: string;
  class?: string;
  lang: string;
}
export default function Code(props: IMarkdownProps) {
  marked.use({
    async: false,
  });

  const { raw, class: class, lang, ...rest } = props;

  const htmlValue = hljs.highlight(raw, { language: lang }).value;
  //   const markdownHighlight = hljs.highlight("js", markdownValue).value;

  return (
    <>
      <div
        class={twMerge("prose max-w-full", class)}
        innerHTML={htmlValue}
        {...rest}
      ></div>
    </>
  );
}
