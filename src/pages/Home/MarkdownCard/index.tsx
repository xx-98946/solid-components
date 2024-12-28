import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Markdown from "@/comps/Markdown";
import Title from "@/comps/Title";
import raw from "./test.md?raw";

export default function MarkdownCard() {
  return (
    <Card id="MarkdownCard">
      <Title>博客组件 - Markdown</Title>
      <Hr></Hr>
      <Card>
        <Title>基本文档</Title>
        <Hr></Hr>
        <Markdown raw={raw} class="px-3"></Markdown>
      </Card>
    </Card>
  );
}
