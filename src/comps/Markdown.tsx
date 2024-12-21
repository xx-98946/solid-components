import { marked } from "marked";
import { twMerge } from "tailwind-merge";
// import { createSignal, onMount } from "solid-js";

interface IMarkdownProps {
  raw: string;
  class?: string;
}
export default function Markdown(props: IMarkdownProps) {
  marked.use({
    async: false,
  });

  const { raw, class: className, ...rest } = props;

  const markdownValue = marked.parse(raw) as any as string;

  return (
    <div
      class={twMerge("prose max-w-full", className)}
      innerHTML={markdownValue}
      {...rest}
    ></div>
  );
}
