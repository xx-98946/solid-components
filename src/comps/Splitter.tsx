import Base, { IBaseProps, IStateOrProp, toSignal } from "./Base";
import { createSignal, JSX, Signal } from "solid-js";
import VBody from "./VBody.tsx";
import { twMerge } from "tailwind-merge";

export interface ISplitterProps extends IBaseProps {}
const baseClass = "flex overflow-hidden";
/**
 * 布局组件
 * @param props
 * @returns
 */
export default function Splitter(props: ISplitterProps) {
  return <Base {...props} baseClass={baseClass}></Base>;
}

interface SplitterSideProps extends IBaseProps {
  width?: IStateOrProp<number>;
  height?: IStateOrProp<number>;
  splitterClass?: string;
}
/**
 * 左侧布局
 * @param props
 * @returns
 */
export function SplitterLeft(props: SplitterSideProps) {
  const { children, splitterClass, ...rest } = props;
  const width = toSignal(props.width || 400);
  const [getWidth] = width;

  return (
    <Base
      {...rest}
      baseClass="flex-grow-0 flex-shrink-0 flex items-stretch justify-end"
      style={`width: ${getWidth()}px;`}
    >
      <div class="flex-1 h-full">{children}</div>
      {/* 这个是拖拽条 */}
      <VerticalSplitter width={width} class={splitterClass} />
    </Base>
  );
}

/**
 * 右侧布局
 * @param props
 * @returns
 */
export function SplitterRight(props: SplitterSideProps) {
  const { children, splitterClass, ...rest } = props;
  const width = toSignal(props.width || 400);
  const [getWidth] = width;
  return (
    <Base
      {...rest}
      baseClass="shrink-0 grow-0 flex items-stretch justify-end"
      style={`width: ${getWidth()}px;`}
    >
      {/* 这个是拖拽条 */}
      <VerticalSplitter width={width} class={splitterClass} reverse />
      <div class="flex-1 h-full">{children}</div>
    </Base>
  );
}

/**
 * 中间布局
 * @param props
 * @returns
 */
export function SplitterCenter(props: IBaseProps) {
  return <Base {...props} baseClass="flex-1"></Base>;
}

interface IVerticalSplitterProps {
  width: Signal<number>;
  class?: string;
  reverse?: boolean;
}
/**
 * 竖向分割条
 * @param props
 * @returns
 */
function VerticalSplitter(props: IVerticalSplitterProps) {
  const { width } = props;
  const [getWidth, setWidth] = width;
  const [getIsClicking, setIsClicking] = createSignal(false);

  // 鼠标按下
  const handleMouseDown: JSX.EventHandlerUnion<
    HTMLDivElement,
    MouseEvent,
    JSX.EventHandler<HTMLDivElement, MouseEvent>
  > = (e) => {
    setIsClicking(true);
    setClientX(e.clientX);
  };

  // 按下并拖动
  const [getClientX, setClientX] = createSignal(0);
  const handleMousemove: JSX.EventHandlerUnion<
    HTMLDivElement,
    MouseEvent,
    JSX.EventHandler<HTMLDivElement, MouseEvent>
  > = (e) => {
    if (getIsClicking()) {
      const diff = e.clientX - getClientX();
      let computedWidth = getWidth() + diff;
      // 向左还是向右拖动
      if (props.reverse) {
        computedWidth = getWidth() - diff;
      }
      setWidth(computedWidth);
      setClientX(e.clientX);
    }
  };

  // 鼠标抬起
  const handleMouseup = () => {
    setIsClicking(false);
  };

  return (
    <>
      <VBody mouseup={handleMouseup} mousemove={handleMousemove} />
      <Base
        baseClass={twMerge(
          `h-full bg-slate-50 dark:bg-gray-800 w-[4px] hover:bg-blue-500 dark:hover:bg-blue-500 cursor-col-resize rounded-md transition ${getIsClicking() && "bg-blue-500"}`,
        )}
        onMouseDown={handleMouseDown}
      ></Base>
    </>
  );
}

interface IhorizontalSplitterProps {
  height: Signal<number>;
  class?: string;
  reverse?: boolean;
}
/**
 * 横向向分割条
 * @param props
 * @returns
 */
function HorizontalSplitter(props: IhorizontalSplitterProps) {
  const { height } = props;
  const [getHeight, setHeight] = height;
  const [getIsClicking, setIsClicking] = createSignal(false);
  const [getClientY, setClientY] = createSignal(0);

  // 鼠标按下
  const handleMouseDown: JSX.EventHandlerUnion<
    HTMLDivElement,
    MouseEvent,
    JSX.EventHandler<HTMLDivElement, MouseEvent>
  > = (e) => {
    setIsClicking(true);
    setClientY(e.clientY);
  };

  // 按下并拖动
  const handleMousemove: JSX.EventHandlerUnion<
    HTMLDivElement,
    MouseEvent,
    JSX.EventHandler<HTMLDivElement, MouseEvent>
  > = (e) => {
    if (getIsClicking()) {
      const diff = e.clientY - getClientY();
      let computedHeight = getHeight() + diff;
      // 向左还是向右拖动
      if (props.reverse) {
        computedHeight = getHeight() - diff;
      }
      setHeight(computedHeight);
      setClientY(e.clientY);
    }
  };

  // 鼠标抬起
  const handleMouseup = () => {
    setIsClicking(false);
  };

  return (
    <>
      <VBody mouseup={handleMouseup} mousemove={handleMousemove} />
      <Base
        baseClass={twMerge(
          `h-[4px] w-full bg-slate-50 dark:bg-gray-800  hover:bg-blue-500  cursor-row-resize ${getIsClicking() && "bg-blue-500"}`,
        )}
        onMouseDown={handleMouseDown}
      ></Base>
    </>
  );
}

/**
 * 下侧布局
 * @param props
 * @returns
 */
export function SplitterBottom(props: SplitterSideProps) {
  const { children, splitterClass, ...rest } = props;
  const height = toSignal(props.height || 100);
  const [getHeight] = height;

  return (
    <Base
      {...rest}
      baseClass="flex-grow-0 flex-shrink-0 flex flex-col items-stretch justify-end"
      style={`height: ${getHeight()}px;`}
    >
      <HorizontalSplitter height={height} class={splitterClass} reverse />
      <div class="flex-1 w-full">{children}</div>
      {/* 这个是拖拽条 */}
    </Base>
  );
}

/**
 * 上侧布局
 * @param props
 * @returns
 */
export function SplitterTop(props: SplitterSideProps) {
  const { children, splitterClass, ...rest } = props;
  const height = toSignal(props.height || 100);
  const [getHeight] = height;

  return (
    <Base
      {...rest}
      baseClass="flex-grow-0 flex-shrink-0 flex flex-col items-stretch justify-end"
      style={`height: ${getHeight()}px;`}
    >
      <div class="flex-1 w-full">{children}</div>
      <HorizontalSplitter height={height} class={splitterClass} />
      {/* 这个是拖拽条 */}
    </Base>
  );
}

Splitter.left = SplitterLeft;
Splitter.center = SplitterCenter;
Splitter.right = SplitterRight;
Splitter.top = SplitterTop;
Splitter.bottom = SplitterBottom;
