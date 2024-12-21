import { For } from "solid-js";
import { twMerge } from "tailwind-merge";

export default function LeftMenu(props: { activeId?: string | null }) {
  const list = [
    {
      title: "卡片组件",
      id: "CardCard",
    },
    {
      title: "标题组件",
      id: "TitleCard",
    },
    {
      title: "按钮组件",
      id: "ButtonCard",
    },
    {
      title: "图标组件",
      id: "IconCard",
    },
    {
      title: "布局组件",
      id: "LayoutCard",
    },
    {
      title: "滚动条组件",
      id: "ScrollCard",
    },
    {
      title: "链接组件",
      id: "LinkCard",
    },
    {
      title: "分隔面板组件",
      id: "SplitterCard",
    },
  ];
  return (
    <div>
      <ul class="pl-4">
        <For each={list}>
          {(item) => (
            <li
              class={twMerge(
                "p-2 border-l-2 border-transparent",
                props.activeId == item.id && "bg-purple-100 border-purple-500",
              )}
            >
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
