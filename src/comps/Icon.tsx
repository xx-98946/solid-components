import { JSX } from "solid-js";
import Base from "./Base";

interface IProps extends JSX.SvgSVGAttributes<SVGSVGElement> {}

const baseClass = "size-6 text-inherit";

export default function Icon(props: IProps) {
  return <Base component="svg" baseClass={baseClass} {...props}></Base>;
}
