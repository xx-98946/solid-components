import { createSignal, Signal } from "solid-js";
/**
 * 创建受限范围的signal
 * @param value 初始值
 * @param min 最小值
 * @param max 最大值
 * @returns signal
 */
export function createLimitedSignal(
  value: number,
  min: number,
  max: number,
): Signal<number> {
  const [get, _set] = createSignal(value);
  const set = (newValueOrCb: number | ((v: number) => number)) => {
    if (typeof newValueOrCb == "number") {
      if (newValueOrCb > max) {
        _set(max);
      } else if (newValueOrCb < min) {
        _set(min);
      } else {
        _set(newValueOrCb);
      }
    } else {
      const cbValue = newValueOrCb(get());
      if (cbValue > max) {
        _set(max);
      } else if (cbValue < min) {
        _set(min);
      } else {
        _set(cbValue);
      }
    }
  };
  return [get, set];
}

interface IToastOptions {
  message: string;
  position: [number, number];
}
/**
 * 提示弹窗
 * @param message
 */
export function toast({ message, position }: IToastOptions) {
  const messageNode = document.createElement("div");
  messageNode.innerHTML = message;
  messageNode.className = `fixed bg-amber-300 p-2  rounded-md -translate-x-1/2 text-sm`;
  const [x, y] = position;
  messageNode.setAttribute("style", `left:${x}px;top:${y + 10}px;`);
  console.log({ x, y, message });
  const body = document.body;
  body.append(messageNode);
  setTimeout(() => {
    body.removeChild(messageNode);
  }, 500);
}

export function getTargetRect(target: HTMLElement) {
  const rects = target.getClientRects();
  for (let rect of rects) {
    console.log("??rect", rect);
  }
}
