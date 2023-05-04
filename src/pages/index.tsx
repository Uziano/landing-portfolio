import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Uzi Dev</title>
        <meta name="description" content="Welcome to Uzi Dev Portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Image
          priority
          src="/images/me.jpg"
          className={styles.logo}
          height={200}
          width={200}
          alt="Profile Pic"
        /> 
      </main>
    </>
  );
}
