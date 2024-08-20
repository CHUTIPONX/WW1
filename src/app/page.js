import Image from "next/image";
import Corousel from "./components/Carousel";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <Corousel />
      <br />
      <Card />
      <br />
    </>
  );
}
