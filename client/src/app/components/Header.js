import styles from "./component.module.css"

export default function Header(){
    return(
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
    )
}