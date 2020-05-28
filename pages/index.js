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
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className='post-list-item'>
              <Link href='/posts/[id]' as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {formatDate(date)}
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
