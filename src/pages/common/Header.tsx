import Link from "@/comps/Link";
import Title from "@/comps/Title";
import { useLocation } from "@solidjs/router";
import { createEffect, For } from "solid-js";
import { twMerge } from "tailwind-merge";

export default function CommonHeader(props: { class?: string }) {
  const links = [
    {
      content: "组件库",
      href: "/",
    },
    {
      content: "test",
      href: "/test",
    },
  ];

  const baseClass =
    "text-xl pl-6 py-4 shadow-sm border-b  font-normal tracking-wider bg-gradient-to-r to-purple-50 via-sky-50 via-50% from-emerald-50 to-90%";

  const location = useLocation();
  const isActive = (href: string) => {
    return location.pathname == href;
  };

  return (
    <Title class={twMerge(baseClass, props.class)}>
      <For each={links}>
        {({ content, href }) => (
          <Link
            href={href}
            class={`mr-4 border-b pb-2 transition ${isActive(href) && "border-b-blue-500"}`}
          >
            {content}
          </Link>
        )}
      </For>
    </Title>
  );
}
