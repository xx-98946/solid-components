import ButtonCard from "./ButtonCard";
import IconCard from "./IconCard";
import ScrollCard from "./ScrollCard";
import LinkCard from "./LinkCard";
import LeadingCard from "./LeadingCard";
import CardCard from "./CardCard";
import SplitterCard from "./SplitterCard";
import Splitter from "@/comps/Splitter";
import { createLimitedSignal } from "@/utils";
import Scroll from "@/comps/Scroll";
import { createSignal, onMount } from "solid-js";
import LeftMenu from "./LeftMenu";
import MarkdownCard from "./MarkdownCard";
import VBodyCard from "./VBodyCard";
import Title from "@/comps/Title";
import { setPathname } from "@/store";

function App() {
  const leftWidth = createLimitedSignal(200, 100, 300);
  const scrollTopElement = createSignal<Element | null>(null);
  const [getScrollTopElement] = scrollTopElement;
  onMount(() => {
    setPathname("/");
  });

  const menuList = [
    {
      title: "卡片组件",
      id: "CardCard",
    },
    {
      title: "标题组件",
      id: "LeadingCard",
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
      title: "博客组件",
      id: "MarkdownCard",
    },
    {
      title: "虚拟主体组件",
      id: "VBody",
    },
  ];

  return (
    <main class="dark:bg-slate-900 h-full">
      <Title>组件库</Title>
      {/* <CommonHeader class="grow-0 shrink-0" /> */}
      <Splitter class="flex flex-1 h-full">
        <Splitter.left
          width={leftWidth}
          splitterClass="bg-gray-50 dark:bg-gray-800"
          class="bg-gray-50 dark:bg-slate-950"
        >
          <LeftMenu list={menuList} activeId={getScrollTopElement()?.id} />
        </Splitter.left>
        <Splitter.center class="pt-4">
          <Scroll class="h-full pb-[80vh]" curElement={scrollTopElement}>
            <CardCard />
            <LeadingCard />
            <ButtonCard />
            <IconCard />
            <ScrollCard />
            <LinkCard />
            <SplitterCard />
            <MarkdownCard />
            <VBodyCard />
          </Scroll>
        </Splitter.center>
      </Splitter>
    </main>
  );
}

export default App;
