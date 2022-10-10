import Card from "./Card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export default function CardSection(props: any) {
  const { title, videos, size } = props;

  const [section, setSection] = useState(0);

  function firstSection() {
    let newVideos = videos.slice(0, 6);
    console.log(newVideos);
    return showNewVideos(newVideos);
  }

  function secondSection() {
    let newVideos = videos.slice(6, 12);
    console.log(newVideos);
    return showNewVideos(newVideos);
  }

  function thirdSection() {
    let newVideos = videos.slice(12, 18);
    console.log(newVideos);
    return showNewVideos(newVideos);
  }

  function showNewVideos(newVideos: any) {
    return newVideos.map((video: { imgUrl: string }, index: string) => {
      return <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />;
    });
  }

  return (
    <div className="relative mx-3 lg:mx-14 mb-12 z-30">
      <div className="flex flex-row items-end mb-1 lg:mb-3">
        <h2 className="text-md lg:text-2xl text-[#e5e5e5] font-medium">
          {title}
        </h2>
        <p className="text-[#e5e5e5] ml-auto mr-0"></p>
      </div>
      <IoIosArrowBack
        onClick={() => setSection(section - 1)}
        className={`${
          section === 0 ? "hidden" : "block"
        } text-white text-4xl -mb-36 -translate-x-10 relative z-10 hover:cursor-pointer rounded h-36`}
      />
      <div className="hidden xl:grid grid-flow-col grid-rows-1 gap-2">
        {section === 0 ? firstSection() : ""}
        {section === 1 ? secondSection() : ""}
        {section === 2 ? thirdSection() : ""}
      </div>
      <div className="grid xl:hidden grid-flow-col grid-rows-1 gap-2">
        {videos.slice(0, 4).map((video: { imgUrl: string }, index: string) => {
          return (
            <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />
          );
        })}
      </div>
      <IoIosArrowForward
        onClick={() => setSection(section + 1)}
        className={`${
          section === 2 ? "hidden" : "block"
        } ml-auto mr-0 text-white text-4xl -mb-36 -translate-y-36 translate-x-10 relative z-10 hover:cursor-pointer rounded h-36`}
      />
    </div>
  );
}
