import Head from "next/head";
import Navbar from "../components/Navbar";
import { NextPage } from "next";
import Banner from "../components/Banner";
import CardSection from "../components/CardSection";

const Home: NextPage = () => {
  const someVideos = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1340&q=80",
    },
  ];
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
        <CardSection title="Trending Now" videos={someVideos} size="large" />
        <CardSection title="Recently Added" videos={someVideos} size="large" />
      </main>
    </>
  );
};

export default Home;
