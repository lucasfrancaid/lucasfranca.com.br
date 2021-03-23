import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  const myBio = `
    Software Developer since 2019.
    I can develop a system from zero to deploy.
    Able to use many technologies, in special Python, NodeJS, FastAPI, Django, React, Vue, AWS and Linux.
  `

  return (
    <div className={styles.container}>
      <Head>
        <title>Lucas França | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:description" content={myBio} key="ogdescription" />
        <meta property="og:image" content="https://lucasfrancaid.com.br/me.png" key="ogimage" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi👋, I'm <Link href="/me">Lucas França!</Link>
        </h1>

        <h2 className={styles.description}>
          Website in building... Below are some links about me:
        </h2>

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
            <p>My professional Social Media, connect with me.</p>
          </a>

          <a href="https://www.youtube.com/channel/UCwCM-3HpHVXQQULPg1mCo2A" target="_blank" className={styles.card}>
            <h3>Youtube &rarr;</h3>
            <p>Videos about tech, programming and maybe other topics.</p>
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
