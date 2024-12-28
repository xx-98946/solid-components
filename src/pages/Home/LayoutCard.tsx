import Card from "@/comps/Card";
import Layout from "@/comps/Layout";
import Title from "@/comps/Title";
import Hr from "@/comps/Hr";
import Center from "@/comps/Center";

export default function () {
  return (
    <Card id="LayoutCard">
      <Title>布局组件 Layout</Title>
      <Hr></Hr>
      <div>
        <Card>
          <Title>基本布局组件</Title>
          <Hr></Hr>
          <Layout class="grid grid-cols-6 text-white gap-2">
            <Center class="bg-red-500 dark:bg-red-800">1</Center>
            <Center class="bg-red-500 dark:bg-red-800 col-span-2">2</Center>
            <Center class="bg-red-500 dark:bg-red-800 col-span-3 row-span-3">
              3
            </Center>
            <Center class="bg-red-500 dark:bg-red-800 col-span-3 row-span-2">
              4
            </Center>
            <Center class="bg-red-500 dark:bg-red-800 col-span-5 row-span-2">
              5
            </Center>
            <Center class="bg-red-500 dark:bg-red-800 col-span-1">6</Center>
            <Center class="bg-red-500 dark:bg-red-800 col-span-1">7</Center>
          </Layout>
        </Card>
      </div>
    </Card>
  );
}
