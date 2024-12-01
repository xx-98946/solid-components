import Base from "./Base";
import { JSX } from "solid-js";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const baseClass = "flex items-center justify-center min-h-10 min-w-10";

export default function Center(props: IProps) {
  return <Base {...props} baseClass={baseClass}></Base>;
}
