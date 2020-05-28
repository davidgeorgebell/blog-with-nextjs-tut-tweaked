import Head from 'next/head';
import Link from 'next/link';

import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/Layout';
import { formatDate } from '../utils/formatDate';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <ul className='post-list'>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className='post-list-item'>
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a className='post-title'>{title}</a>
              </Link>
              <div className='post-time'>{formatDate(date)}</div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
