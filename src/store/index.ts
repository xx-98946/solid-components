import { createSignal } from "solid-js";

export const pathname = createSignal("");

export const [getPathname, setPathname] = pathname;
