import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Leading from "@/comps/Leading";

export default function CardCard() {
  return (
    <Card id="CardCard" class="mt-0">
      <Leading>卡片组件 - Card</Leading>
      <Hr></Hr>
      <Card class="m-4">
        <Leading>卡片标题</Leading>
        <Hr></Hr>
        <div class="pl-2">
          <div>我是卡片内容1</div>
          <div>我是卡片内容2</div>
        </div>
      </Card>
    </Card>
  );
}
