import Base from "./Base";
import { JSX } from "solid-js";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const baseClass = "scroll-smooth overflow-auto focus:scroll-auto";

export default function Scroll(props: IProps) {
  return <Base {...props} baseClass={baseClass}></Base>;
}
