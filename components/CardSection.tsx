import Card from "./Card";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export default function CardSection(props: any) {
  const { title, videos, size } = props;

  const [sliceA, setSliceA] = useState(0);
  const [sliceB, setSliceB] = useState(6);

  const handleNext = () => {
    setSliceA((sliceA) => sliceA + 6);
    setSliceB((sliceB) => sliceB + 6);
  };

  const handleBack = () => {
    setSliceA((sliceA) => sliceA - 6);
    setSliceB((sliceB) => sliceB - 6);
  };

  return (
    <div className="relative mx-3 lg:mx-14 mb-12 z-30">
      <div className="flex flex-row items-end mb-1 lg:mb-3">
        <h2 className="text-md lg:text-2xl text-[#e5e5e5] font-medium">
          {title}
        </h2>
        <p className="text-[#e5e5e5] ml-auto mr-0">
          {sliceA} - {sliceB}
        </p>
      </div>
      <IoIosArrowBack
        onClick={handleBack}
        className={`${
          sliceA === 0 ? "hidden" : "block"
        } text-white text-4xl -mb-36 -translate-x-10 relative z-10 hover:cursor-pointer rounded h-36`}
      />
      <div className="hidden xl:grid grid-flow-col grid-rows-1 gap-2">
        {videos
          .slice(sliceA, sliceB)
          .map((video: { imgUrl: string }, index: string) => {
            return (
              <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />
            );
          })}
      </div>
      <div className="grid xl:hidden grid-flow-col grid-rows-1 gap-2">
        {videos.slice(0, 4).map((video: { imgUrl: string }, index: string) => {
          return (
            <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />
          );
        })}
      </div>
      <IoIosArrowForward
        onClick={handleNext}
        className={`${
          sliceB === 18 ? "hidden" : "block"
        } ml-auto mr-0 text-white text-4xl -mb-36 -translate-y-36 translate-x-10 relative z-10 hover:cursor-pointer rounded h-36`}
      />
    </div>
  );
}
