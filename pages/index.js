import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { getSortedPostsData } from '../lib/posts';
import Layout, { siteTitle } from '../components/Layout';
import { formatDate } from '../utils/formatDate';

export default function Home({ allPostsData }) {
  const [filteredPosts, setFilteredPosts] = useState('');

  const handleSearchInput = event => {
    setFilteredPosts(event.target.value);
  };

  const filteredArticles = allPostsData.filter(item =>
    item.title.toLowerCase().includes(filteredPosts.toLowerCase())
  );

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>bellsnotes</h1>
      <p>
        Welcome to my cabinet of curiosities. This is my collection of notes on
        anything.
      </p>
      <form className='post-form'>
        <input
          className='post-search'
          aria-label='Search'
          placeholder='Type to search...'
          type='text'
          onChange={handleSearchInput}
        />
      </form>
      <section>
        <ul className='post-list'>
          {filteredArticles.map(({ id, date, title }) => (
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
