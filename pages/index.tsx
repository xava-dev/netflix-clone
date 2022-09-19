import Head from "next/head";
import Navbar from "../components/Navbar";
import { NextPage } from "next";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="NNetflix clone built with Next JS" />
        <link rel="icon" href="/netflix-favicon.svg" />
      </Head>
      <main>
        <Navbar />
        <Banner
          title="/static/thewitcher-title.webp"
          imgUrl="/static/thewitcher-banner.webp"
        />
      </main>
      s
    </>
  );
};

export default Home;
