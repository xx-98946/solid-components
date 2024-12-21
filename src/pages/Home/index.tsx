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

function App() {
  const leftWidth = createLimitedSignal(200, 100, 300);
  const scrollTopElement = createSignal<Element | null>(null);
  const [getScrollTopElement] = scrollTopElement;

  return (
    <main class="flex flex-col h-screen w-screen overflow-hidden">
      <CommonHeader class="grow-0 shrink-0" />
      <Splitter class="flex flex-1 pt-4">
        <Splitter.left class="" width={leftWidth}>
          <LeftMenu activeId={getScrollTopElement()?.id} />
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
          </Scroll>
        </Splitter.center>
      </Splitter>
    </main>
  );
}

export default App;
