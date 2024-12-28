import Link from "@/comps/Link";
import { split } from "lodash";
import { For, splitProps } from "solid-js";
import { twMerge } from "tailwind-merge";

interface IProps {
  activeId?: string | null;
  list: Array<{
    title: string;
    id: string;
  }>;
}
export default function LeftMenu(props: IProps) {
  const [knownProps, rest] = splitProps(props, ["list"]);
  return (
    <div class="pt-4 mr-1">
      <ul class="pl-4">
        <For each={knownProps.list}>
          {(item) => (
            <li
              class={twMerge(
                "p-2 border-l-2 border-transparent",
                props.activeId == item.id &&
                  "bg-purple-100 border-purple-500 dark:bg-purple-950",
              )}
            >
              <Link href={`#${item.id}`}>{item.title}</Link>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}
