import Base from "./Base";
import { JSX } from "solid-js";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const baseClass =
  "border border-gray-200 rounded-md m-4 p-2 min-h-10 shadow-md";

export default function Card(props: IProps) {
  return <Base {...props} baseClass={baseClass}></Base>;
}
