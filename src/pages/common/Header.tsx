import Link from "@/comps/Link";
import Leading from "@/comps/Leading";
// import { useLocation } from "@solidjs/router";
import { createEffect, For, onMount, type Signal } from "solid-js";
import { twMerge } from "tailwind-merge";
import { getPathname } from "@/store";

interface IProps {
  class?: string;
}
export default function CommonHeader(props: IProps) {
  const links = [
    {
      content: "组件库",
      href: "/",
    },
    {
      content: "测试",
      href: "/test",
    },
    {
      content: "导航",
      href: "/link",
    },
  ];

  const baseClass =
    "text-lg pl-6 pt-1 pb-2 shadow  font-normal tracking-wider bg-gradient-to-r to-purple-50 via-sky-50 via-50% from-emerald-50 to-90% dark:from-slate-900 dark:via-slate-950 dark:via-70% dark:to-slate-950";

  // const location = useLocation();
  const isActive = (href: string) => {
    // return false;
    return getPathname() == href;
  };

  return (
    <Leading class={twMerge(baseClass, props.class)}>
      <For each={links}>
        {({ content, href }) => (
          <Link
            href={href}
            class={`mr-4 border-b border-b-transparent pb-1 transition  ${isActive(href) && "border-b-blue-500 dark:border-emerald-500"}`}
          >
            {content}
          </Link>
        )}
      </For>
    </Leading>
  );
}
