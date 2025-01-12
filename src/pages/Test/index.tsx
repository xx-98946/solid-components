import { Button } from "@/comps/Button";
import Title from "@/comps/Title";
import CommonHeader from "@/pages/common/Header";
import { setPathname } from "@/store";
import { createEffect, createSignal, onMount } from "solid-js";
import { twMerge } from "tailwind-merge";

export default function Test() {
  const [getChecked, setChecked] = createSignal(false);

  const toggle = () => {
    setChecked((value) => !value);
  };

  const data = () => {
    return getChecked() ? { "data-checked": "" } : {};
  };

  const computedClass = () => {
    return twMerge(Button.blueFill, getChecked() && "text-red-600");
  };

  onMount(() => {
    setPathname("/test");
  });
  return (
    <>
      <Title>测试</Title>
      <Button
        class={twMerge(Button.blueFill, "data-checked:text-red-600")}
        onclick={toggle}
        {...data}
      >
        按钮
      </Button>
      <Button class={computedClass()} onclick={toggle}>
        按钮
      </Button>
    </>
  );
}
