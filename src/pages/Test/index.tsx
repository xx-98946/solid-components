import CommonHeader from "@/pages/common/Header";
import raw from "./test.md?raw";
import Markdown from "@/comps/Markdown";
import Card from "@/comps/Card";
export default function Test() {
  return (
    <>
      <CommonHeader />
      <Card class="mt-4">
        <div class="p-4">
          <Markdown raw={raw} />
        </div>
      </Card>
    </>
  );
}
