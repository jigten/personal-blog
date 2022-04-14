import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import styles from './index.module.scss';
import utilStyles from '../styles/utils.module.scss';
import {getSortedPostsData} from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title className={utilStyles.title}>{siteTitle}</title>
      </Head>
      <>
        <header className={styles.header}>
          <span className={styles.imgContainer}>
            <Image
              priority
              src='/images/profile.jpeg'
              className={styles.infoImg}
              alt={siteTitle}
              height={56}
              width={56}
            />
          </span>
          <section className={utilStyles.infoText}>
            <p>
              Hi - Im Jigten, a software engineer. <br /> Welcome to my personal portfolio and blog.
            </p>
          </section>
        </header>
      </>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
