import { JSX } from "solid-js";
import Base from "./Base";
interface IProps extends JSX.HTMLAttributes<HTMLHeadingElement> {}

const baseClass = "text-2xl font-semibold p-2 leading-4";

export default function Leading(props: IProps) {
  return <Base component="h1" {...props} baseClass={baseClass}></Base>;
}
