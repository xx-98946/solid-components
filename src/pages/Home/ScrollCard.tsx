import Card from "@/comps/Card";
import Title from "@/comps/Title";
import Hr from "@/comps/Hr";
import Scroll from "@/comps/Scroll";
import { For } from "solid-js";
import Center from "@/comps/Center";
import Layout from "@/comps/Layout";
export default function () {
  const imgList = [
    "/imgs/001.avif",
    "/imgs/002.avif",
    "/imgs/003.avif",
    "/imgs/004.avif",
    "/imgs/005.avif",
    "/imgs/006.avif",
    "/imgs/007.avif",
    "/imgs/008.avif",
    "/imgs/009.avif",
    "/imgs/010.avif",
  ];

  return (
    <Card id="ScrollCard">
      <Title>滚动条组件 Scroll</Title>
      <Hr></Hr>
      <Card class="mb-0">
        <Title class="text-xl">水平滚动条</Title>
        <Hr></Hr>
        <Scroll class="flex gap-8 p-4 pb-6 snap-x snap-mandatory">
          <For each={imgList}>
            {(item) => (
              <img
                class="w-80 h-40 rounded-lg shadow-xl bg-white shrink-0 snap-start scroll-ml-6 object-cover"
                src={item}
              />
            )}
          </For>
        </Scroll>
      </Card>
      <Card>
        <Title class="text-xl">垂直滚动条</Title>
        <Hr></Hr>
        <Scroll class="grid snap-y h-64 grid-cols-5 gap-8 p-4">
          <For each={imgList}>
            {(item) => (
              <img
                class="rounded-lg shadow-xl bg-white object-cover h-60 snap-start w-full"
                src={item}
              />
            )}
          </For>
        </Scroll>
      </Card>
    </Card>
  );
}
