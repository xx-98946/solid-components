import { Button, ButtonStyles } from "@/comps/Button";
import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Title from "@/comps/Title";

import { For } from "solid-js";

export default function ButtonCard() {
  const list: Array<{
    label: string;
    style: keyof typeof ButtonStyles;
    fillStyle: keyof typeof ButtonStyles;
    plainStyle: keyof typeof ButtonStyles;
  }> = [
    {
      label: "基本",
      style: "base",
      fillStyle: "baseFill",
      plainStyle: "basePlain",
    },

    {
      label: "赤色",
      style: "red",
      fillStyle: "redFill",
      plainStyle: "redPlain",
    },
    {
      label: "橙色",
      style: "orange",
      fillStyle: "orangeFill",
      plainStyle: "orangePlain",
    },
    {
      label: "黄色",
      style: "yellow",
      fillStyle: "yellowFill",
      plainStyle: "yellowPlain",
    },
    {
      label: "绿色",
      style: "green",
      fillStyle: "greenFill",
      plainStyle: "greenPlain",
    },
    {
      label: "青色",
      style: "cyan",
      fillStyle: "cyanFill",
      plainStyle: "cyanPlain",
    },
    {
      label: "蓝色",
      style: "blue",
      fillStyle: "blueFill",
      plainStyle: "bluePlain",
    },

    {
      label: "紫色",
      style: "purple",
      fillStyle: "purpleFill",
      plainStyle: "purplePlain",
    },
  ];
  return (
    <Card class="mt-6">
      <Title>按钮组件 - Button</Title>
      <Hr></Hr>
      <For each={list}>
        {(item) => (
          <div class="px-2 flex items-center">
            <span>{item.label}按钮：</span>
            <Button class={ButtonStyles[item.style]}>按钮</Button>
            <Button disabled class={ButtonStyles[item.style]}>
              禁用
            </Button>

            <Button class={ButtonStyles[item.fillStyle]}>填充</Button>
            <Button class={ButtonStyles[item.fillStyle]} disabled>
              填充禁用
            </Button>

            <Button class={ButtonStyles[item.plainStyle]}>朴素</Button>
            <Button class={ButtonStyles[item.plainStyle]} disabled>
              朴素禁用
            </Button>
          </div>
        )}
      </For>

      <div class="px-2 flex items-center">
        <span>自定义渐变按钮：</span>
        <Button class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white">
          自定义渐变按钮
        </Button>
      </div>
    </Card>
  );
}
