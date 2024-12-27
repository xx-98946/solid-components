import ButtonCard from "./ButtonCard";
import IconCard from "./IconCard";
import LayoutCard from "./LayoutCard";
import ScrollCard from "./ScrollCard";
import LinkCard from "./LinkCard";
import TitleCard from "./TitleCard";
import CardCard from "./CardCard";
import SplitterCard from "./SplitterCard";
import CommonHeader from "@/pages/common/Header";
import Splitter from "@/comps/Splitter";
import { createLimitedSignal } from "@/utils";
import Scroll from "@/comps/Scroll";
import { createEffect, createSignal, For } from "solid-js";
import LeftMenu from "./LeftMenu";
import MarkdownCard from "./MarkdownCard";

function App() {
  const leftWidth = createLimitedSignal(200, 100, 300);
  const scrollTopElement = createSignal<Element | null>(null);
  const [getScrollTopElement] = scrollTopElement;

  const menuList = [
    {
      title: "卡片组件",
      id: "CardCard",
    },
    {
      title: "标题组件",
      id: "TitleCard",
    },
    {
      title: "按钮组件",
      id: "ButtonCard",
    },
    {
      title: "图标组件",
      id: "IconCard",
    },
    {
      title: "布局组件",
      id: "LayoutCard",
    },
    {
      title: "滚动条组件",
      id: "ScrollCard",
    },
    {
      title: "链接组件",
      id: "LinkCard",
    },
    {
      title: "分隔面板组件",
      id: "SplitterCard",
    },
    {
      title: "Markdown组件",
      id: "MarkdownCard",
    },
  ];

  return (
    <main class="flex flex-col h-screen w-screen overflow-hidden">
      <CommonHeader class="grow-0 shrink-0" />
      <Splitter class="flex flex-1 pt-4">
        <Splitter.left width={leftWidth} splitterClass="bg-gray-50">
          <LeftMenu list={menuList} activeId={getScrollTopElement()?.id} />
        </Splitter.left>
        <Splitter.center>
          <Scroll class="h-full" curElement={scrollTopElement}>
            <CardCard />
            <TitleCard />
            <ButtonCard />
            <IconCard />
            <LayoutCard />
            <ScrollCard />
            <LinkCard />
            <SplitterCard />
            <MarkdownCard />
          </Scroll>
        </Splitter.center>
      </Splitter>
    </main>
  );
}

export default App;
