### 标题

`Markdown`是一种常见的文档格式，主要用于文档编写或者博客。语法相对简单，并可以在其中插入`html`标签和`css`样式来定制页面样式。

### 代码

文档中还可以添加代码，对于文档编写这些功能就已经足够了。如果需要代码编辑功能，则需要使用其他组件。

```tsx
import { JSX } from "solid-js";
import Base from "./Base";
interface IProps extends JSX.HTMLAttributes<HTMLDivElement> {}

const baseClass = "grid";
export default function Layout(props: IProps) {
  return <Base baseClass={baseClass} {...props}></Base>;
}
```
