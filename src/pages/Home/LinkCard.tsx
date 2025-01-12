import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Link from "@/comps/Link";
import Leading from "@/comps/Leading";

export default function LinkCard() {
  return (
    <Card id="LinkCard">
      <Leading>链接组件 - Link</Leading>
      <Hr />
      <div class="p-2">
        <Link href="/">链接</Link>
      </div>
    </Card>
  );
}
