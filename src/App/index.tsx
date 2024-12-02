import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Title from "@/comps/Title";
import ButtonCard from "./ButtonCard";
import IconCard from "./IconCard";
import LayoutCard from "./LayoutCard";

function App() {
  return (
    <>
      <Title class="text-3xl pl-6 pt-4 sticky top-0 shadow-sm border-b bg-gradient-to-r from-purple-100 via-sky-100 via-50% to-emerald-100 to-90% font-normal">
        徐鑫的组件库
      </Title>
      <Card>
        <Title>卡片组件 - Card</Title>
        <Hr></Hr>
        <Card>我是卡片</Card>
      </Card>

      <Card class="mt-6">
        <Title>标题组件 - Title</Title>
        <Hr />
        <Title class="text-4xl">我是标题1</Title>
        <Title class="text-3xl">我是标题2</Title>
        <Title class="text-2xl">我是标题3</Title>
        <Title class="text-xl">我是标题4</Title>
        <Title class="text-base">我是标题5</Title>
      </Card>

      <ButtonCard />

      <IconCard />

      <LayoutCard />
    </>
  );
}

export default App;
