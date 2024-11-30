import { JSX } from "solid-js";
import Base from "./Base";
import { twMerge } from "tailwind-merge";

interface IProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  baseClass?: string;
}

export function Button(props: IProps) {
  return <Base component="button" {...props}></Base>;
}

/**
 * 组件样式
 */

const baseClass = twMerge(
  "border rounded-md m-2 px-2 py-1 shadow-ml cursor-pointer  transition duration-150 ease-in-out flex items-center",
  "disabled:text-gray-300 disabled:cursor-not-allowed disabled:border-gray-300",
);
export const ButtonStyles = {
  base: twMerge(
    baseClass,
    "enabled:text-gray-500 enabled:border-gray-300",
    "hover:enabled:text-blue-500 hover:enabled:border-blue-300 hover:enabled:bg-blue-50",
    "focus:enabled:text-blue-500 focus:enabled:border-blue-300 focus:enabled:bg-blue-50",
    "active:enabled:border-blue-500",
  ),
  blue: twMerge(
    baseClass,
    "enabled:text-blue-500 enabled:border-blue-300",
    "hover:enabled:text-blue-500 hover:enabled:border-blue-300 hover:enabled:bg-blue-50",
    "focus:enabled:text-blue-500 focus:enabled:border-blue-300 focus:enabled:bg-blue-50",
    "active:enabled:border-blue-500",
  ),
  red: twMerge(
    baseClass,
    "enabled:text-red-500 enabled:border-red-300",
    "hover:enabled:text-red-500 hover:enabled:border-red-300 hover:enabled:bg-red-50",
    "focus:enabled:text-red-500 focus:enabled:border-red-300 focus:enabled:bg-red-50",
    "active:enabled:border-red-500",
  ),

  green: twMerge(
    baseClass,
    "enabled:text-green-500 enabled:border-green-300",
    "hover:enabled:text-green-500 hover:enabled:border-green-300 hover:enabled:bg-green-50",
    "focus:enabled:text-green-500 focus:enabled:border-green-300 focus:enabled:bg-green-50",
    "active:enabled:border-green-500",
  ),
  orange: twMerge(
    baseClass,
    "enabled:text-orange-500 enabled:border-orange-300",
    "hover:enabled:text-orange-500 hover:enabled:border-orange-300 hover:enabled:bg-orange-50",
    "focus:enabled:text-orange-500 focus:enabled:border-orange-300 focus:enabled:bg-orange-50",
    "active:enabled:border-orange-500",
  ),
  yellow: twMerge(
    baseClass,
    "enabled:text-yellow-500 enabled:border-yellow-300",
    "hover:enabled:text-yellow-500 hover:enabled:border-yellow-300 hover:enabled:bg-yellow-50",
    "focus:enabled:text-yellow-500 focus:enabled:border-yellow-300 focus:enabled:bg-yellow-50",
    "active:enabled:border-yellow-500",
  ),
  cyan: twMerge(
    baseClass,
    "enabled:text-cyan-500 enabled:border-cyan-300",
    "hover:enabled:text-cyan-500 hover:enabled:border-cyan-300 hover:enabled:bg-cyan-50",
    "focus:enabled:text-cyan-500 focus:enabled:border-cyan-300 focus:enabled:bg-cyan-50",
    "active:enabled:border-cyan-500",
  ),
  purple: twMerge(
    baseClass,
    "enabled:text-purple-500 enabled:border-purple-300",
    "hover:enabled:text-purple-500 hover:enabled:border-purple-300 hover:enabled:bg-purple-50",
    "focus:enabled:text-purple-500 focus:enabled:border-purple-300 focus:enabled:bg-purple-50",
    "active:enabled:border-purple-500",
  ),

  baseFill: twMerge(
    baseClass,
    "text-white enabled:bg-gray-500",
    "hover:enabled:bg-gray-400",
    "active:enabled:bg-gray-600",
    "focus:enabled:bg-gray-400",
  ),

  redFill: twMerge(
    baseClass,
    "text-white enabled:bg-red-500",
    "hover:enabled:bg-red-400",
    "active:enabled:bg-red-600",
    "focus:enabled:bg-red-400",
  ),

  orangeFill: twMerge(
    baseClass,
    "text-white enabled:bg-orange-500",
    "hover:enabled:bg-orange-400",
    "active:enabled:bg-orange-600",
    "focus:enabled:bg-orange-400",
  ),

  yellowFill: twMerge(
    baseClass,
    "text-white enabled:bg-yellow-500",
    "hover:enabled:bg-yellow-400",
    "active:enabled:bg-yellow-600",
    "focus:enabled:bg-yellow-400",
  ),

  greenFill: twMerge(
    baseClass,
    "text-white enabled:bg-green-500",
    "hover:enabled:bg-green-400",
    "active:enabled:bg-green-600",
    "focus:enabled:bg-green-400",
  ),

  cyanFill: twMerge(
    baseClass,
    "text-white enabled:bg-cyan-500",
    "hover:enabled:bg-cyan-400",
    "active:enabled:bg-cyan-600",
    "focus:enabled:bg-cyan-400",
  ),
  blueFill: twMerge(
    baseClass,
    "text-white enabled:bg-blue-500",
    "hover:enabled:bg-blue-400",
    "active:enabled:bg-blue-600",
    "focus:enabled:bg-blue-400",
  ),

  purpleFill: twMerge(
    baseClass,
    "text-white enabled:bg-purple-500",
    "hover:enabled:bg-purple-400",
    "active:enabled:bg-purple-600",
    "focus:enabled:bg-purple-400",
  ),

  basePlain: twMerge(
    baseClass,
    "enabled:text-gray-400 enabled:border-gray-300 enabled:bg-gray-50",
    "hover:enabled:bg-gray-400 hover:enabled:text-white",
    "focus:enabled:bg-gray-400 focus:enabled:text-white",
    "active:enabled:bg-gray-600 active:enabled:text-white",
  ),

  redPlain: twMerge(
    baseClass,
    "enabled:text-red-400 enabled:border-red-300 enabled:bg-red-50",
    "hover:enabled:bg-red-400 hover:enabled:text-white",
    "focus:enabled:bg-red-400 focus:enabled:text-white",
    "active:enabled:bg-red-600 active:enabled:text-white",
  ),
  orangePlain: twMerge(
    baseClass,
    "enabled:text-orange-400 enabled:border-orange-300 enabled:bg-orange-50",
    "hover:enabled:bg-orange-400 hover:enabled:text-white",
    "focus:enabled:bg-orange-400 focus:enabled:text-white",
    "active:enabled:bg-orange-600 active:enabled:text-white",
  ),
  yellowPlain: twMerge(
    baseClass,
    "enabled:text-yellow-400 enabled:border-yellow-300 enabled:bg-yellow-50",
    "hover:enabled:bg-yellow-400 hover:enabled:text-white",
    "focus:enabled:bg-yellow-400 focus:enabled:text-white",
    "active:enabled:bg-yellow-600 active:enabled:text-white",
  ),
  greenPlain: twMerge(
    baseClass,
    "enabled:text-green-400 enabled:border-green-300 enabled:bg-green-50",
    "hover:enabled:bg-green-400 hover:enabled:text-white",
    "focus:enabled:bg-green-400 focus:enabled:text-white",
    "active:enabled:bg-green-600 active:enabled:text-white",
  ),
  cyanPlain: twMerge(
    baseClass,
    "enabled:text-cyan-400 enabled:border-cyan-300 enabled:bg-cyan-50",
    "hover:enabled:bg-cyan-400 hover:enabled:text-white",
    "focus:enabled:bg-cyan-400 focus:enabled:text-white",
    "active:enabled:bg-cyan-600 active:enabled:text-white",
  ),
  bluePlain: twMerge(
    baseClass,
    "enabled:text-blue-400 enabled:border-blue-300 enabled:bg-blue-50",
    "hover:enabled:bg-blue-400 hover:enabled:text-white",
    "focus:enabled:bg-blue-400 focus:enabled:text-white",
    "active:enabled:bg-blue-600 active:enabled:text-white",
  ),
  purplePlain: twMerge(
    baseClass,
    "enabled:text-purple-400 enabled:border-purple-300 enabled:bg-purple-50",
    "hover:enabled:bg-purple-400 hover:enabled:text-white",
    "focus:enabled:bg-purple-400 focus:enabled:text-white",
    "active:enabled:bg-purple-600 active:enabled:text-white",
  ),
};
