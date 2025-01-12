import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Markdown from "@/comps/Markdown";
import Leading from "@/comps/Leading";
import raw from "./test.md?raw";

export default function MarkdownCard() {
  return (
    <Card id="MarkdownCard">
      <Leading>博客组件 - Markdown</Leading>
      <Hr></Hr>
      <Card>
        <Leading>基本文档</Leading>
        <Hr></Hr>
        <Markdown raw={raw} class="px-3"></Markdown>
      </Card>
    </Card>
  );
}
