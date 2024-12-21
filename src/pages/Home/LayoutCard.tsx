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
        <Layout class="grid grid-cols-6 text-white gap-2">
          <Center class="bg-red-500">1</Center>
          <Center class="bg-orange-500 col-span-2">2</Center>
          <Center class="bg-yellow-500 col-span-3 row-span-3">3</Center>
          <Center class="bg-green-500 col-span-3 row-span-2">4</Center>
          <Center class="bg-cyan-500 col-span-5 row-span-2">5</Center>
          <Center class="bg-blue-500 col-span-1">6</Center>
          <Center class="bg-purple-500 col-span-1">7</Center>
        </Layout>
      </div>
    </Card>
  );
}
