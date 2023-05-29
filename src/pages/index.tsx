import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)
 
//  unified coordinates
  const [pos, setPos] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    setPosX( posX + 0.01)
  }, [posX])

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
        
        <div 
          id="circle" 
          style={{ 
            backgroundColor: 'red',
            position: 'absolute',
            left: posX, 
            top: posY,
            width: 100,
            height: 100,
            borderRadius: '50%'
          }}
        >
        </div>

        <button onClick={()=>{setPosX( posX + 50)}}>Move +</button>
        <button onClick={()=>{setPosY( posY - 50)}}>Move +</button>
        <button onClick={()=>{setPosX( posX - 50)}}>Move -</button>
        <button onClick={()=>{setPosY( posY + 50)}}>Move -</button>
      </main>
    </>
  );
}
