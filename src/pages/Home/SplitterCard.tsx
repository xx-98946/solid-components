import Card from "@/comps/Card";
import Center from "@/comps/Center";
import Hr from "@/comps/Hr";
import Splitter from "@/comps/Splitter";
import Leading from "@/comps/Leading";
import { createLimitedSignal } from "@/utils";
import { createSignal } from "solid-js";

export default function SplitterCard() {
  const width = createSignal(400);

  const leftWidth = createLimitedSignal(400, 100, 600);
  const rightWidth = createLimitedSignal(400, 100, 600);
  return (
    <Card id="SplitterCard">
      <Leading>分隔面板组件 - Splitter</Leading>
      <Hr />

      <Card>
        <Leading class="text-xl">水平分隔 左侧</Leading>
        <Hr></Hr>
        <Splitter>
          <Splitter.left class="bg-red-500 dark:bg-red-800 h-20" width={width}>
            <Center class="w-full h-full">left</Center>
          </Splitter.left>
          <Splitter.center class="bg-red-500 dark:bg-red-800">
            <Center class="h-full">center</Center>
          </Splitter.center>
        </Splitter>
      </Card>

      <Card>
        <Leading class="text-xl">水平分隔 右侧</Leading>
        <Hr></Hr>
        <Splitter>
          <Splitter.center class="bg-red-500 dark:bg-red-800">
            <Center class="h-full">center</Center>
          </Splitter.center>
          <Splitter.right class="bg-red-500 dark:bg-red-800 h-20">
            <Center class="w-full h-full">right</Center>
          </Splitter.right>
        </Splitter>
      </Card>
      <Card>
        <Leading class="text-xl">水平分隔 左中右</Leading>
        <Hr></Hr>
        <Splitter>
          <Splitter.left
            class="bg-red-500 dark:bg-red-800 h-20"
            width={leftWidth}
          >
            <Center class="w-full h-full">left</Center>
          </Splitter.left>
          <Splitter.center class="bg-red-500 dark:bg-red-800">
            <Center class="h-full">center</Center>
          </Splitter.center>
          <Splitter.right
            class="bg-red-500 dark:bg-red-800 h-20"
            width={rightWidth}
          >
            <Center class="w-full h-full">right</Center>
          </Splitter.right>
        </Splitter>
      </Card>

      <Card>
        <Leading class="text-xl">垂直分隔 上中下</Leading>
        <Hr></Hr>
        <Splitter class="flex-col h-[30vh]">
          <Splitter.top
            class="bg-red-500 dark:bg-red-800"
            height={createSignal(50)}
          >
            <Center class="w-full h-full">top</Center>
          </Splitter.top>
          <Splitter.center class="bg-red-500 dark:bg-red-800">
            <Center class="h-full">center</Center>
          </Splitter.center>
          <Splitter.bottom
            class="bg-red-500 dark:bg-red-800"
            height={createSignal(60)}
          >
            <Center class="w-full h-full">bottom</Center>
          </Splitter.bottom>
        </Splitter>
      </Card>

      <Card>
        <Leading class="text-xl">混合布局 上中下</Leading>
        <Hr></Hr>
        <Splitter class="flex-col h-[30vh]">
          <Splitter.top
            class="bg-red-500 dark:bg-red-800"
            height={createSignal(50)}
          >
            <Center class="w-full h-full">top</Center>
          </Splitter.top>
          <Splitter.center class="h-full">
            <Splitter class="h-full">
              <Splitter.left class="bg-red-500 dark:bg-red-800">
                <Center class="w-full h-full">left</Center>
              </Splitter.left>
              <Splitter.center class="bg-red-500 dark:bg-red-800">
                <Center class="h-full">center</Center>
              </Splitter.center>
              <Splitter.right class="bg-red-500 dark:bg-red-800">
                <Center class="w-full h-full">right</Center>
              </Splitter.right>
            </Splitter>
          </Splitter.center>
          <Splitter.bottom
            class="bg-red-500 dark:bg-red-800"
            height={createSignal(60)}
          >
            <Center class="w-full h-full">bottom</Center>
          </Splitter.bottom>
        </Splitter>
      </Card>

      <Card>
        <Leading class="text-xl">混合布局 左中右</Leading>
        <Hr></Hr>
        <Splitter class="h-[30vh]">
          <Splitter.left class="bg-red-500 dark:bg-red-800" width={400}>
            <Center>left</Center>
          </Splitter.left>

          <Splitter.center>
            <Splitter class="flex-col h-full">
              <Splitter.top class="bg-red-500 dark:bg-red-800">
                <Center>top</Center>
              </Splitter.top>
              <Splitter.center class="bg-red-500 dark:bg-red-800">
                <Center>center</Center>
              </Splitter.center>
              <Splitter.bottom class="bg-red-500 dark:bg-red-800">
                <Center>bottom</Center>
              </Splitter.bottom>
            </Splitter>
          </Splitter.center>

          <Splitter.right class="bg-red-500 dark:bg-red-800" width={400}>
            <Center>right</Center>
          </Splitter.right>
        </Splitter>
      </Card>
    </Card>
  );
}
