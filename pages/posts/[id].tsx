import Layout from '../../components/layout';
import {getAllPostIds, getPostData} from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.scss';
import {GetStaticProps, GetStaticPaths} from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    content: MDXRemoteSerializeResult;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <MDXRemote {...postData.content} />
      </article>
    </Layout>
  );
}
