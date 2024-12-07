import { Button, ButtonStyles } from "@/comps/Button";
import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Splitter from "@/comps/Splitter";
import Title from "@/comps/Title";
import { createSignal } from "solid-js";

export default function SplitterCard() {
  const width = createSignal(500);
  const [_, setWidth] = width;

  const randomWIdth = () => {
    setWidth(Math.floor(Math.random() * 200) + 400);
  };

  return (
    <Card>
      <Title>分隔面板组件 - Splitter</Title>
      <Hr />

      <Title class="text-xl">水平分隔</Title>
      <Splitter>
        <Splitter.Left class="bg-red-500 h-40" width={width}>
          <div class="w-full h-full">
            left
            <Button class={ButtonStyles.blueFill} onClick={randomWIdth}>
              增加宽度
            </Button>
          </div>
        </Splitter.Left>
        <Splitter.Right class="bg-green-500">right</Splitter.Right>
      </Splitter>

      <Title class="text-xl">水平分隔</Title>
      <Splitter>
        <Splitter.Left class="h-40 bg-red-500">
          <div class="w-full h-full">left</div>
        </Splitter.Left>
        <Splitter.Right class="bg-purple-500">right</Splitter.Right>
      </Splitter>
    </Card>
  );
}
