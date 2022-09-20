import { useState } from "react";
import Image from "next/image";

const Card = (props: any) => {
  const {
    imgUrl = "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    size = "medium",
    id,
  } = props;

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleOnError = () => {
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80"
    );
  };

  return (
    <div className="group w-1/6 mx-1 h-36 relative first:hover:ml-16 first:hover:-mr-14 last:hover:mr-16 last:hover:-ml-14 hover:scale-150 z-10 hover:-mt-20 hover:z-40 hover:drop-shadow-[0_0_30px_rgba(0,0,0,1)] transition-all ease-out duration-200 hover:ease-in hover:delay-300">
      <div className="cursor-pointer w-full max-h-36">
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          objectFit="cover"
          onError={handleOnError}
          className="rounded-md hover:rounded-t-md hover:rounded-b-none"
        />
      </div>
      <div className="relative z-40 px-3 py-2 invisible group-hover:visible rounded-b-md mt-36 bg-netflixBackground h-16 text-white group-hover:delay-300">
        Movie
      </div>
    </div>
  );
};

export default Card;
