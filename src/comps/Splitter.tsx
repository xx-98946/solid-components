import Base, { IBaseProps, IPropData, toDataProps } from "./Base";
import { createSignal, JSX, Signal } from "solid-js";
export interface ISplitterProps extends IBaseProps {}
const baseClass = "flex";
export default function Splitter(props: ISplitterProps) {
  return <Base {...props} baseClass={baseClass}></Base>;
}

interface SplitterLeftProps extends IBaseProps {
  width?: IPropData<number>;
}
export function SplitterLeft(props: SplitterLeftProps) {
  const { children, ...rest } = props;
  const width = toDataProps(props.width || 400);
  const [getWidth, setWidth] = width;
  return (
    <Base
      {...rest}
      baseClass="shrink-0 flex items-stretch  justify-end"
      style={`width: ${getWidth()}px;`}
    >
      <div class="flex-1">{children}</div>
      {/* 这个是拖拽条 */}
      <VerticalSplitter width={width} />
    </Base>
  );
}

export function SplitterRight(props: IBaseProps) {
  return <Base {...props} baseClass="flex-1"></Base>;
}

function VerticalSplitter(props: { width: Signal<number> }) {
  const { width } = props;
  const [getWidth, setWidth] = width;

  const [getIsMoving, setIsMoving] = createSignal(false);
  const [getClientX, setClientX] = createSignal(0);
  const [getOffsetX, setOffetX] = createSignal(0);
  const handleMouseDown: JSX.EventHandlerUnion<
    HTMLDivElement,
    MouseEvent,
    JSX.EventHandler<HTMLDivElement, MouseEvent>
  > = (e) => {
    setIsMoving(true);
    setClientX(e.clientX);
    // isMoving
    // console.log("down", e.clientX, e.clientY);
  };

  const handleMouseMove: JSX.EventHandlerUnion<
    HTMLDivElement,
    MouseEvent,
    JSX.EventHandler<HTMLDivElement, MouseEvent>
  > = (e) => {
    console.log("move", e.clientX, e.clientY);
    setWidth((width) => width + 1);
  };

  return (
    <div
      class="h-full bg-gray-300 w-1 hover:bg-blue-500  hover:opacity-100 cursor-col-resize"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    ></div>
  );
}

Splitter.Left = SplitterLeft;
Splitter.Right = SplitterRight;
