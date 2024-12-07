import Title from "@/comps/Title";
import ButtonCard from "./ButtonCard";
import IconCard from "./IconCard";
import LayoutCard from "./LayoutCard";
import ScrollCard from "./ScrollCard";
import LinkCard from "./LinkCard";
import TitleCard from "./TitleCard";
import CardCard from "./CardCard";
import SplitterCard from "./SplitterCard";

function HomeTitle() {
  return (
    <Title class="text-2xl pl-6 pt-4 sticky top-0 shadow-sm border-b bg-gradient-to-r from-purple-100 via-sky-100 via-50% to-emerald-100 to-90% font-normal tracking-wider font-mono">
      组件库
    </Title>
  );
}

function App() {
  return (
    <>
      <HomeTitle />
      <CardCard />
      <TitleCard />
      <ButtonCard />
      <IconCard />
      <LayoutCard />
      <ScrollCard />
      <LinkCard />
      <SplitterCard />
    </>
  );
}

export default App;
