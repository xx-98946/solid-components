import CommonHeader from "@/pages/common/Header";
import raw from "./test.md?raw";
import Markdown from "@/comps/Markdown";
// import Code from "@/comps/Code";
import Card from "@/comps/Card";
import { Button, ButtonStyles } from "@/comps/Button";
import getTargetPosition from "@/utils/getTargetRect";

function handleClick(e) {
  const result = getTargetPosition(e.target);
  console.log(result);
}

export default function Test() {
  return (
    <>
      <CommonHeader />
      <Button class={ButtonStyles.bluePlain} onClick={handleClick}>
        提示
      </Button>
      <Card class="mt-4">
        <Markdown raw={raw} class="w-3/4 mx-auto" />
      </Card>
    </>
  );
}
