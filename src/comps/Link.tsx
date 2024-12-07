import { JSX } from "solid-js";
import Base from "./Base";

export interface ILinkProps
  extends JSX.AnchorHTMLAttributes<HTMLAnchorElement> {}

const baseClass = "hover:text-blue-500";
export default function Link(props: ILinkProps) {
  return <Base {...props} baseClass={baseClass} component="a" />;
}
