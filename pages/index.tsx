import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="" />
      </Head>
      <h1 className="text-red-500 text-4xl">
        Welcome to the NFT DROP CHALLENGE
      </h1>
    </div>
  );
};

export default Home;
