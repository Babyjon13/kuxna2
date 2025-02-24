'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import { useState } from "react";
import Link from "next/link";
import recipes from "./recipes.json"
  
  export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.gg}>
      <main className={styles.main}>
       <div>
        <ul>
          {recipes.map((item,index) =>(
            <div key={index} className={styles.lenta}>
              <Link href={`recipe/${index}`} className={styles.Link}>
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
        <ul>
        {recipes.map((item,index)=>(
            <li key={index}>
              <input type="checkbox"></input><label key={index}>{item.title}</label>
            </li>
        ))}
        </ul>
      </nav>
      </div>
    </>
  );
}
