import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="px-16 py-6 text-white flex flex-row w-full bg-netflixBackground">
        <ul className="flex flex-row text-sm font-light">
          <li className="mr-10">
            <Link href="/">
              <a>
                <Image
                  src="/netflix-logo.png"
                  width={92}
                  height={24}
                  alt="Netflix logo"
                />
              </a>
            </Link>
          </li>

          <li className="mr-6">
            <Link href="/">
              <a className="font-medium hover:text-gray-400 transition-all ease-linear duration-500">
                Home
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/series">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Series
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/films">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Films
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                New & Popular
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                My List
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Browse by Languages
              </a>
            </Link>
          </li>
        </ul>
        <ul className="flex flex-row text-sm font-light mr-0 ml-auto">
          <li className="mr-6">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Search icon
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Children
              </a>
            </Link>
          </li>
          <li className="mr-6">
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Notifications icon
              </a>
            </Link>
          </li>
          <li>
            <Link href="">
              <a className="hover:text-gray-400 transition-all ease-linear duration-500">
                Profile avatar
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
