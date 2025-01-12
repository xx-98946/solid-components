import { JSX, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";
import Scroll from "./Scroll";
interface IProps {
  header: () => JSX.Element;
  children?: JSX.Element; // 子元素
  class?: string;
}

const baseClass = "flex h-screen overflow-hidden flex-col";
export default function Layout(props: IProps) {
  const [KnowProps, rest] = splitProps(props, ["header", "children", "class"]);
  return (
    <div {...rest} class={twMerge(baseClass, KnowProps.class)}>
      <header class="grow-0 shrink-0 h-auto ">
        <KnowProps.header />
      </header>
      <Scroll class="flex-1">{KnowProps.children}</Scroll>
    </div>
  );
}
