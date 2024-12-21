import { createSignal, onMount } from "solid-js";
import * as monaco from "monaco-editor";

export default function MonacoEditor() {
  const [getValue, setValue] = createSignal("我是一段文字");
  const [getLanguage, setLanguage] = createSignal("javascript");
  let refContainer;

  function initMonaco() {
    if (!refContainer) return;
    const myEditor = monaco.editor.create(refContainer, {
      value: getValue(),
      language: getLanguage(),
      automaticLayout: true,
    });
  }

  onMount(() => {
    initMonaco();
  });

  return <div ref={refContainer} class="h-[50vh] w-full border"></div>;
}
