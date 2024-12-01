import { JSX } from "solid-js";
import Base from "./Base";
interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const baseClass = "grid";
export default function Layout(props: IProps) {
  return <Base baseClass={baseClass} {...props}></Base>;
}
