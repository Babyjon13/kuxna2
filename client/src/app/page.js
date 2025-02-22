'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";
import recipes from "./recipe/[index]/recipes.json"
  
  export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
        <strong>KOMODACHI</strong>
        </div>
        <div>
        <a className={styles.a} href="/qwerty">qwerty</a>
        <a className={styles.a}>asdfg</a>
        <a className={styles.a}>zxcvvb</a>          
        </div>
      </header>
      <div className={styles.gg}>
      <main className={styles.main}>
       <div>
        <ul>
          {recipes.map((item,index) =>(
            <div key={index} className={styles.lenta}>
              <Link href={`recipe/${index}`}>
              <div><h1>{item.title}</h1>
              <p>{item.description}</p>
              <Image 
              src={recipes[index].image}
              width={250}
              height={250}
              alt={index}
              /></div>
              </Link>
            </div>
          ))}
        </ul>
       </div>
      </main>
      <nav className={styles.nav}>
        <strong>asdasd</strong>
        <strong>sadasdasd</strong>
      </nav>
      </div>
    </>
  );
}
