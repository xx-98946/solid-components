import Card from "@/comps/Card";
import Hr from "@/comps/Hr";
import Leading from "@/comps/Leading";
import VBody from "@/comps/VBody";
import { createSignal } from "solid-js";

export default function VBodyCard() {
  const [getCount, setCount] = createSignal(0);
  function handleClick() {
    setCount((count) => count + 1);
  }
  return (
    <Card id="VBody">
      <Leading>虚拟主体 - VBody</Leading>
      <Hr></Hr>
      <div class="pl-2 select-none leading-8">
        <div>
          当给虚拟主体绑定事件时则会添加给body，这样可以方便对全局事件的处理。
        </div>
        <div>点击全屏次数：{getCount()}</div>
        <VBody click={handleClick}></VBody>
      </div>
    </Card>
  );
}
