import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default function CardSection(props: any) {
  const { title = "Recently Added" } = props;
  return (
    <div className="relative mx-3 lg:mx-14 mb-12 z-30">
      <h2 className="text-md lg:text-2xl text-[#e5e5e5] font-medium ml-1 lg:ml-2 mb-1 lg:mb-3">
        {title}
      </h2>
      <div className="flex flex-row">
        <Card
          id={1}
          imgUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
          size="medium"
        ></Card>
        <Card
          id={1}
          imgUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
          size="medium"
        ></Card>
        <Card
          id={1}
          imgUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
          size="medium"
        ></Card>
        <Card
          id={1}
          imgUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
          size="medium"
        ></Card>
        <Card
          id={1}
          imgUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
          size="medium"
        ></Card>
        <Card
          id={1}
          imgUrl="https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
          size="medium"
        ></Card>
      </div>
    </div>
  );
}
