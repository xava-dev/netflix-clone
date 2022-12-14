import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowDropDown } from "react-icons/md";
import { magic } from "../lib/magic-client";

export default function Navbar() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function getUsername() {
      try {
        const { email } = await magic.user.getMetadata();
        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.log("Error retrieving email:", error);
      }
    }
    getUsername();
  }, []);

  const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
      const updatePosition = () => {
        setScrollPosition(window.pageYOffset);
      };

      window.addEventListener("scroll", updatePosition);

      updatePosition();

      return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
  };

  const scrollPosition = useScrollPosition();
  const router = useRouter();

  const handleSignOut = async (e: any) => {
    e.preventDefault();

    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn());
      await router.push("/login");
    } catch (error) {
      console.error("Error logging out", error);
      await router.push("/login");
    }
  };

  return (
    <>
      <nav
        className={`px-6 lg:px-16 pt-6 pb-4 text-white flex flex-row w-full items-center fixed z-20 transition-all ease-in-out duration-500 ${
          scrollPosition > 0
            ? "bg-netflixBackground"
            : "bg-gradient-to-b from-netflixBackground"
        }`}
      >
        <ul className="flex flex-row text-sm font-light">
          <li className="mr-4 lg:mr-10 -mt-[2px]">
            <Link href="/">
              <a>
                <Image
                  src="/netflix.svg"
                  width={93}
                  height={26}
                  alt="Netflix logo"
                />
              </a>
            </Link>
          </li>

          <li className="group text-sm lg:hidden flex">
            Browse
            <MdArrowDropDown className="text-white text-2xl -mt-[2px] lg:hidden" />
            <div className="group invisible group-hover:visible text-center absolute w-44 top-16 bg-black/90 border border-gray-500/50 left-6 text-white transition-all duration-200">
              <ul className="text-md w-full py-2">
                <li className="my-2">
                  <a className="font-medium hover:text-gray-400 transition-all">
                    Home
                  </a>
                </li>
                <li className="my-2">
                  <a className="hover:text-gray-400 transition-all">Series</a>
                </li>
                <li className="my-2">
                  <a className="hover:text-gray-400 transition-all">Films</a>
                </li>
                <li className="my-2">
                  <a className="hover:text-gray-400 transition-all">
                    New & Popular
                  </a>
                </li>
                <li className="my-2">
                  <a className="hover:text-gray-400 transition-all">My List</a>
                </li>
                <li className="my-2">
                  <a className="hover:text-gray-400 transition-all">
                    Browse by Languages
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="mr-6 hidden lg:inline-block">
            <Link href="/">
              <a className="font-medium hover:text-gray-400 transition-all ease-linear duration-500">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-6 hidden lg:inline-block">
            <Link href="/">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Series
              </a>
            </Link>
          </li>
          <li className="mr-6 hidden lg:inline-block">
            <Link href="/">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Films
              </a>
            </Link>
          </li>
          <li className="mr-6 hidden lg:inline-block">
            <Link href="/">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                New & Popular
              </a>
            </Link>
          </li>
          <li className="mr-6 hidden lg:inline-block">
            <Link href="/">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                My List
              </a>
            </Link>
          </li>
          <li className="hidden lg:inline-block">
            <Link href="/">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Browse by languages
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row text-sm font-light mr-0 ml-auto items-center -mt-2">
          <li className="mr-3 lg:mr-6">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-icon"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
          <li className="mr-6 hidden lg:inline-block">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Children
              </a>
            </Link>
          </li>
          <li className="mr-3 lg:mr-6">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Hawkins-Icon Hawkins-Icon-Standard"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="group transition-all ease-linear duration-500">
                <div className="flex items-center">
                  <img
                    className="profile-icon rounded"
                    src="https://occ-0-513-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
                    alt=""
                  />
                  <MdArrowDropDown className="text-white text-2xl ml-1 hidden lg:inline-block" />
                </div>
                <div className="group invisible group-hover:visible absolute min-w-60 w-fit top-16 bg-black/90 border border-gray-500/50 right-6 lg:right-16 text-white transition-all duration-200">
                  <ul className="text-sm w-full px-4 py-2 flex flex-col items-start">
                    <li className="my-2">
                      <a className="hover:underline flex items-center">
                        <img
                          className="mr-3 rounded"
                          src="https://occ-0-513-41.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
                          alt=""
                        />
                        {username}
                      </a>
                    </li>
                    <li className="my-2 ml-1">
                      <a className="hover:underline flex items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-4"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Manage Profiles
                      </a>
                    </li>
                    <li className="my-2 ml-1">
                      <a className="hover:underline flex items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-4"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Account
                      </a>
                    </li>
                    <li className="my-2 ml-1">
                      <a className="hover:underline flex items-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-4"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                        Help Centre
                      </a>
                    </li>
                  </ul>
                  <p className="text-xs font-light border-t border-gray-500/50 text-center hover:underline w-full mx-auto py-4">
                    <a onClick={handleSignOut}>Sign out of Netflix</a>
                  </p>
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
