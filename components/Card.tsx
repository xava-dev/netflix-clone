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
    <div className="group h-40 lg:h-36 relative first:hover:ml-6 first:hover:-mr-6 last:hover:mr-6 last:hover:-ml-6 lg:first:hover:ml-16 lg:first:hover:-mr-16 lg:last:hover:mr-16 lg:last:hover:-ml-16 hover:scale-150 z-10 hover:-mt-20 hover:z-40 hover:drop-shadow-[0_0_30px_rgba(0,0,0,1)] transition-all ease-out duration-200 hover:ease-in hover:delay-300">
      <div className="cursor-pointer w-full max-h-36">
        <Image
          src={imgSrc}
          alt="image"
          layout="fill"
          objectFit="cover"
          onError={handleOnError}
          className="rounded group-hover:rounded-t group-hover:rounded-b-none"
        />
      </div>
      <div className="relative z-40 p-2 lg:p-3 invisible group-hover:visible rounded-b-md mt-40 lg:mt-36 bg-netflixBackground h-15 text-white group-hover:delay-300">
        <div className="flex flex-row items-center">
          <button>
            <div className="bg-white border-2 border-white hover:bg-white/50 hover:border-transparent lg:p-1 rounded-full transition-all duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black scale-50 lg:scale-75"
              >
                <path
                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
          <button>
            <div className="mx-1 lg:ml-2 border-2 bg-netflixBackground/50 border-gray-500/75 hover:border-white lg:p-1 rounded-full transition-all duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white scale-50 lg:scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
          <button className="w-fit ml-auto mr-0">
            <div className="border-2 bg-netflixBackground/50 border-gray-500/75 hover:border-white lg:p-1 rounded-full transition-all duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white scale-50 lg:scale-75"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
