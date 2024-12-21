import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Title from "@/comps/Title";

export default function TitleCard() {
  return (
    <Card id="TitleCard">
      <Title>标题组件 - Title</Title>
      <Hr />
      <Title class="text-4xl">我是标题1</Title>
      <Title class="text-3xl">我是标题2</Title>
      <Title class="text-2xl">我是标题3</Title>
      <Title class="text-xl">我是标题4</Title>
      <Title class="text-base">我是标题5</Title>
    </Card>
  );
}
