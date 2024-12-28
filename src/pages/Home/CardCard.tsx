import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Title from "@/comps/Title";

export default function CardCard() {
  return (
    <Card id="CardCard" class="mt-0">
      <Title>卡片组件 - Card</Title>
      <Hr></Hr>
      <Card class="m-4">
        <Title>卡片标题</Title>
        <Hr></Hr>
        <div class="pl-2">
          <div>我是卡片内容1</div>
          <div>我是卡片内容2</div>
        </div>
      </Card>
    </Card>
  );
}
