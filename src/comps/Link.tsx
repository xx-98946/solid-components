import { JSX, splitProps } from "solid-js";
import Base from "./Base";

export interface ILinkProps
  extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {}

const baseClass = "hover:text-blue-500";
export default function Link(props: ILinkProps) {
  const [knownProps, rest] = splitProps(props, ["class"]);
  return <Base {...rest} class={knownProps.class || baseClass} component="a" />;
}
