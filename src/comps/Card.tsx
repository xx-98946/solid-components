import Base from "./Base";
import { JSX } from "solid-js";

interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const baseClass =
  "border border-gray-200 rounded-md mx-4 my-6 p-2 min-h-10 shadow-lg dark:border-gray-700";

export default function Card(props: IProps) {
  return <Base {...props} baseClass={baseClass}></Base>;
}
