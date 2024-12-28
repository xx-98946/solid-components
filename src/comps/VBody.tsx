import { onCleanup, onMount } from "solid-js";

type IVBodyEvents = {
  [P in keyof HTMLElementEventMap]?: Function;
};

/**
 * 创建虚拟组件Body
 * @returns
 */
export default function VBody(props: IVBodyEvents) {
  const body = document.body;

  onMount(() => {
    Object.entries(props).forEach(([event, handler]) => {
      // @ts-ignore
      body.addEventListener(event, handler);
    });
  });

  onCleanup(() => {
    Object.entries(props).forEach(([event, handler]) => {
      // @ts-ignore
      body.removeEventListener(event, handler);
    });
  });

  return <></>;
}
