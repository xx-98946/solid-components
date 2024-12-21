import Card from "@/comps/Card";
import Center from "@/comps/Center";
import Hr from "@/comps/Hr";
import Splitter from "@/comps/Splitter";
import Title from "@/comps/Title";
import { createLimitedSignal } from "@/utils";
import { createSignal } from "solid-js";

export default function SplitterCard() {
  const width = createSignal(400);

  const leftWidth = createLimitedSignal(400, 100, 600);
  const rightWidth = createLimitedSignal(400, 100, 600);
  return (
    <Card id="SplitterCard">
      <Title>分隔面板组件 - Splitter</Title>
      <Hr />

      <Title class="text-xl">水平分隔 左侧</Title>
      <Splitter>
        <Splitter.left class="bg-red-600 h-20" width={width}>
          <Center class="w-full h-full">left</Center>
        </Splitter.left>
        <Splitter.center class="bg-green-500">
          <Center class="h-full">fixed</Center>
        </Splitter.center>
      </Splitter>

      <Title class="text-xl">水平分隔 右侧</Title>
      <Splitter>
        <Splitter.center class="bg-green-500">
          <Center class="h-full">fixed</Center>
        </Splitter.center>
        <Splitter.right class="bg-purple-500 h-20">
          <Center class="w-full h-full">right</Center>
        </Splitter.right>
      </Splitter>

      <Title class="text-xl">水平分隔 左中右</Title>
      <Splitter>
        <Splitter.left class="bg-red-500 h-20" width={leftWidth}>
          <Center class="w-full h-full">left</Center>
        </Splitter.left>
        <Splitter.center class="bg-green-500">
          <Center class="h-full">fixed</Center>
        </Splitter.center>
        <Splitter.right class="bg-purple-500 h-20" width={rightWidth}>
          <Center class="w-full h-full">right</Center>
        </Splitter.right>
      </Splitter>

      <Title class="text-xl">垂直分隔 上中下</Title>
      <Splitter class="flex-col h-[30vh]">
        <Splitter.top class="bg-orange-500" height={createSignal(50)}>
          <Center class="w-full h-full">top</Center>
        </Splitter.top>
        <Splitter.center class="bg-cyan-500">
          <Center class="h-full">fixed</Center>
        </Splitter.center>
        <Splitter.bottom class="bg-blue-500" height={createSignal(60)}>
          <Center class="w-full h-full">bottom</Center>
        </Splitter.bottom>
      </Splitter>

      <Title class="text-xl">混合布局 上中下</Title>
      <Splitter class="flex-col h-[30vh]">
        <Splitter.top class="bg-orange-500" height={createSignal(50)}>
          <Center class="w-full h-full">top</Center>
        </Splitter.top>
        <Splitter.center class="h-full">
          <Splitter class="h-full">
            <Splitter.left class="bg-red-500">
              <Center class="w-full h-full">left</Center>
            </Splitter.left>
            <Splitter.center class="bg-green-500">
              <Center class="h-full">fixed</Center>
            </Splitter.center>
            <Splitter.right class="bg-purple-500">
              <Center class="w-full h-full">right</Center>
            </Splitter.right>
          </Splitter>
        </Splitter.center>
        <Splitter.bottom class="bg-blue-500" height={createSignal(60)}>
          <Center class="w-full h-full">bottom</Center>
        </Splitter.bottom>
      </Splitter>

      <Title class="text-xl">混合布局 左中右</Title>

      <Splitter class="h-[30vw]">
        <Splitter.left class="bg-amber-400" width={100}>
          <Center>left</Center>
        </Splitter.left>

        <Splitter.center>
          <Splitter class="flex-col h-full">
            <Splitter.top class="bg-purple-100">
              <Center>top</Center>
            </Splitter.top>
            <Splitter.center class="bg-purple-200">
              <Center>center</Center>
            </Splitter.center>
            <Splitter.center class="bg-purple-300">
              <Center>center</Center>
            </Splitter.center>
            <Splitter.bottom class="bg-purple-400">
              <Center>bottom</Center>
            </Splitter.bottom>
          </Splitter>
        </Splitter.center>

        <Splitter.right class="bg-blue-500" width={200}>
          <Center>right</Center>
        </Splitter.right>
      </Splitter>
    </Card>
  );
}
