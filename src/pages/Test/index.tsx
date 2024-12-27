import CommonHeader from "@/pages/common/Header";
import raw from "./test.md?raw";
import Markdown from "@/comps/Markdown";
// import Code from "@/comps/Code";
import Card from "@/comps/Card";
export default function Test() {
  return (
    <>
      <CommonHeader />
      <Card class="mt-4">
        <Markdown raw={raw} class="w-3/4 mx-auto" />
      </Card>
    </>
  );
}
