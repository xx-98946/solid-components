import {
  type Component,
  createSignal,
  JSX,
  Signal,
  splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import { twMerge } from "tailwind-merge";

export type IStateOrProp<T> = undefined | T | Signal<T>;

/**
 * 判断 value 是不是 Signal
 * @param value
 * @returns
 */
function isSignal<T>(value: IStateOrProp<T>) {
  if (Array.isArray(value) && value.length && typeof value[0] == "function") {
    return true;
  }
  return false;
}

/**
 * 将props和data统一处理为 Signal
 * 注：如果传递的是普通参数则不会在父子组件中同步
 * @param defaultValue
 * @returns
 */
export function toSignal<T>(defaultValue: IStateOrProp<T>): Signal<T> {
  return (isSignal(defaultValue)
    ? defaultValue
    : createSignal(defaultValue)) as any as Signal<T>;
}

export interface IBaseProps {
  class?: string; // 覆盖样式
  baseClass?: string; // 基本样式
  children?: JSX.Element; // 子元素
  component?: string | Component; // 组件和类型
  ui?: string;
  [key: string]: unknown;
}
export default function Base(props: IBaseProps) {
  const [knownProps, restProps] = splitProps(props, [
    "class",
    "baseClass",
    "component",
  ]);

  const component = knownProps.component || "div";
  const computedClass = () => twMerge(props.baseClass, knownProps.class);
  return (
    <Dynamic component={component} class={computedClass()} {...restProps} />
  );
}
