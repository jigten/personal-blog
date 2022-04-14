import Head from 'next/head';
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Link from 'next/link';
import ThemeToggle from './themeToggle';

export const siteTitle = 'J1gten';

export default function Layout({children, home}: {children: React.ReactNode; home?: boolean}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/images/favicon.ico' />
      </Head>
      <div className={styles.navbar}>
        <h1 className={utilStyles.headingLg}>{siteTitle}</h1>
        <ThemeToggle />
      </div>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
