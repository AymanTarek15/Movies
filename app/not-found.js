// app/not-found.js

import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>

      <Link className={styles.link} href="/">
        Go back to Home
      </Link>
    </div>
  );
}
