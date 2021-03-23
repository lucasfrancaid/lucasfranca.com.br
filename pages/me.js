import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Me.module.css'

export default function Me() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Me | Lucas França</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>
					<Link href="/">
							<a>Home</a>
					</Link>
				</h1>
			</main>
		</div>
	)
}