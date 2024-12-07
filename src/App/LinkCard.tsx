import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Link from "@/comps/Link";
import Title from "@/comps/Title";

export default function LinkCard() {
  return (
    <Card>
      <Title>链接组件 - Link</Title>
      <Hr />
      <div class="p-2">
        <Link href="/">链接</Link>
      </div>
    </Card>
  );
}
