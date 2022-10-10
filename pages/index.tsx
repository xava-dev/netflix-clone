import Head from "next/head";
import Navbar from "../components/Navbar";
import { NextPage } from "next";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";
import { getVideos } from "../lib/videos";

export async function getServerSideProps(context: any) {
  const mainVideos = await getVideos();
  return { props: { mainVideos } };
}

// @ts-ignore
const Home: NextPage = ({ mainVideos }) => {
  return (
    <>
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="Netflix clone built with Next JS" />
        <link rel="icon" href="/netflix-favicon.svg" />
      </Head>
      <main>
        <div className="h-screen -mb-96 lg:-mb-60">
          <Navbar />
          <Banner
            title="/static/thewitcher-title.webp"
            imgUrl="/static/witcher-banner.jpeg"
          />
        </div>
        <CardSection title="Trending Now" videos={mainVideos} />
        <CardSection title="Recently Added" videos={mainVideos} />
      </main>
    </>
  );
};

export default Home;
