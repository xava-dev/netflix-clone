import Image from "next/image";
import Link from "next/link";

export default function Banner(props: any) {
  const { title, imgUrl } = props;

  return (
    <>
      <div className="absolute w-full h-5/6 z-0">
        <div className="relative bg-gradient-to-t h-full from-netflixBackground z-10"></div>
        <div className="absolute z-20 top-72 left-6 lg:left-16 flex flex-col">
          <span className="lg:hidden">
            <Image src={title} width={250} height={100} alt="" />
          </span>
          <span className="hidden lg:block">
            <Image src={title} width={500} height={200} alt="" />
          </span>
          <div className="mt-4 lg:mt-12 flex flex-row w-fit">
            <button className="ml-0 mr-auto bg-white hover:bg-white/50 py-1 px-4 text-sm lg:py-3 lg:px-8 lg:text-xl font-medium rounded-md flex items-center transition-all duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 lg:mr-3 scale-75 lg:scale-100"
              >
                <path
                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                  fill="currentColor"
                ></path>
              </svg>
              Play
            </button>
            <button className="ml-3 lg:ml-6 bg-white/25 hover:bg-white/10 text-white py-1 px-4 text-sm lg:py-3 lg:px-8 lg:text-xl font-medium rounded-md flex items-center transition-all duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 lg:mr-3 scale-75 lg:scale-100"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>
              More Info
            </button>
          </div>
        </div>

        <Image
          src={imgUrl}
          objectFit="cover"
          layout="fill"
          alt=""
          className="absolute -z-10"
        />
      </div>
    </>
  );
}
