import Base, { IStateOrProp, toSignal } from "./Base";
import { createSignal, JSX } from "solid-js";
import { throttle } from "lodash";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {
  curElement?: IStateOrProp<Element | null>;
}

const baseClass = "scroll-smooth overflow-auto focus:scroll-auto";

export default function Scroll(props: IProps) {
  const { curElement, ...rest } = props;
  const [_getCurElement, setCurElement] = toSignal(curElement);
  /**
   * 计算出在视口中的第一个元素
   * @param e
   */
  const handleScroll: JSX.EventHandlerUnion<
    HTMLDivElement,
    Event,
    JSX.EventHandler<HTMLDivElement, Event>
  > = (e) => {
    const parent = e.target;
    const parentRect = parent.getBoundingClientRect();
    const children = parent.children;
    const topItem = [...children].find((item) => {
      const itemRect = item.getBoundingClientRect();
      if (
        itemRect.top > parentRect.top ||
        itemRect.top + itemRect.height > parentRect.top
      ) {
        return true;
      }
      return false;
    });
    setCurElement(topItem!);
  };
  return (
    <Base
      {...rest}
      baseClass={baseClass}
      onScroll={throttle(handleScroll, 50)}
    ></Base>
  );
}
