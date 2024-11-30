import { JSX } from "solid-js";
import Base from "./Base";

interface IProps extends JSX.HTMLAttributes<HTMLHRElement> {}

const baseClass = "border-gray-200 my-2 mx-0";

export default function Hr(props: IProps) {
  return <Base component="hr" baseClass={baseClass} {...props}></Base>;
}
