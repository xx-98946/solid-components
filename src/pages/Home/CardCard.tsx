import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Title from "@/comps/Title";

export default function CardCard() {
  return (
    <Card id="CardCard">
      <Title>卡片组件 - Card</Title>
      <Hr></Hr>
      <Card>
        <div>我是卡片内容1</div>
        <div>我是卡片内容2</div>
      </Card>
    </Card>
  );
}
