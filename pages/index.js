import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cours de RN</title>
        <meta name="description" content="Modified by Bakary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Le cours de React Mobile App<a href=""> de Kale Code Academy</a>
        </h1>

        <p className={styles.description}>
          Cliquez sur les buttons ci-dessous et suivez les instructions afin
          {" d'installer"} quelques logiciels necessaires {"à"} un environnement
          de {"développement"} web moderne. Les numeros sur les buttons
          indiquent {" l'ordre"} de {"l'installation"} {"à"} respecter. S.V.P.
          suivez les instructions propres au systeme {"d'exploitation"} de votre
          machine.
        </p>

        <div className={styles.grid}>
          {items.map((item) => (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              key={item.id}
            >
              <h2>
                {item.id} {item.name}
              </h2>
              <p>{items.description}</p>
            </a>
          ))}
        </div>
        <div className={styles.description}>Les Vidéos de la semaine 1</div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <iframe
              src="https://embed.api.video/vod/vi3v1cdrUfE2ofy5HmrP6htG"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowFullSreen="true"
            ></iframe>
          </div>
          <div className={styles.card}>
            <iframe
              src="https://embed.api.video/vod/vi4mrMB7qNMkrWeMona2z4EQ"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allowFullScreen="true"
            ></iframe>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
const items = [
  {
    id: 1,
    name: "Git Bash",
    description: "Git Bash",
    link: "https://gitforwindows.org/",
  },
  {
    id: 2,
    name: "Node JS",
    description: "Node JS",
    link: "https://nodejs.org/fr/",
  },
  {
    id: 3,
    name: "VS code",
    description: "VS code",
    link: "https://code.visualstudio.com/",
  },
];
