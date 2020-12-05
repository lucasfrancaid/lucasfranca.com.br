import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Lucas França</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/me">my site!</Link>
        </h1>

        <p className={styles.description}>
          In building... {' '}
          <code className={styles.code}>new Promise()</code>
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/lucasfrancaid" target="_blank" className={styles.card}>
            <h3>Github &rarr;</h3>
            <p>You'll know more about my code! There I use Python, Node, React, Django and Vue.</p>
          </a>

          <a href="https://medium.com/@lucasfrancaid" target="_blank" className={styles.card}>
            <h3>Medium &rarr;</h3>
            <p>Did you know that I wrote an article/tutorial? Click and learn more.</p>
          </a>

          <a href="https://www.linkedin.com/in/lucasfrancaid/" target="_blank" className={styles.card}>
            <h3>LinkedIn &rarr;</h3>
            <p>My professional Social Media!</p>
          </a>

          <a href="https://www.instagram.com/lucasfrancaid/" target="_blank" className={styles.card}>
            <h3>Instagram &rarr;</h3>
            <p>Post of my personal life.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link
          href="/me"
          target="_blank"
          rel="noopener noreferrer"
        >
          <a>
            Powered by{' '}
            <img src="/lf.png" alt="Lucas França Logo" className={styles.logo} />
          </a>
        </Link>
      </footer>
    </div>
  )
}
