import { Button, ButtonStyles } from "@/comps/Button";
import CommonHeader from "@/pages/common/Header";
import { createEffect, createSignal } from "solid-js";
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
    return twMerge(ButtonStyles.blueFill, getChecked() && "text-red-600");
  };

  createEffect(() => {
    console.log("??", computedClass());
  });
  return (
    <>
      <CommonHeader />

      <Button
        class={twMerge(ButtonStyles.blueFill, "data-checked:text-red-600")}
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
