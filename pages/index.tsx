import Head from "next/head";
import Header from "../components/Header";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Netflix</title>
        <meta name="description" content="NNetflix clone built with Next JS" />
        <link rel="icon" href="/netflix-favicon.svg" />
      </Head>
      <main>
        <Header />
      </main>
    </>
  );
};

export default Home;
