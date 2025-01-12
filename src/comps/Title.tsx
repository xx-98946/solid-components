import { onMount } from "solid-js";
interface IProps {
  children: string;
}

export default function Title(props: IProps) {
  onMount(() => {
    document.title = props.children;
  });
  return <></>;
}
