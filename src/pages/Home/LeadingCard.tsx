import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Leading from "@/comps/Leading";

export default function LeadingCard() {
  return (
    <Card id="LeadingCard">
      <Leading>标题组件 - Leading</Leading>
      <Hr />
      <Leading class="text-4xl">我是标题1</Leading>
      <Leading class="text-3xl">我是标题2</Leading>
      <Leading class="text-2xl">我是标题3</Leading>
      <Leading class="text-xl">我是标题4</Leading>
      <Leading class="text-base">我是标题5</Leading>
    </Card>
  );
}
