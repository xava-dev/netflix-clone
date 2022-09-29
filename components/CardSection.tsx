import Card from "./Card";

export default function CardSection(props: any) {
  const { title, videos, size } = props;
  return (
    <div className="relative mx-3 lg:mx-14 mb-12 z-30">
      <h2 className="text-md lg:text-2xl text-[#e5e5e5] font-medium ml-1 lg:ml-2 mb-1 lg:mb-3">
        {title}
      </h2>
      <div className="grid grid-flow-col grid-rows-1 gap-2">
        {videos.slice(0, 6).map((video: { imgUrl: string }, index: string) => {
          return (
            <Card key={index} id={index} imgUrl={video.imgUrl} size={size} />
          );
        })}
      </div>
    </div>
  );
}
