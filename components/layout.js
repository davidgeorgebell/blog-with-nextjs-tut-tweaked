import Head from 'next/head';
import Link from 'next/link';

const name = 'BellsNotes';
export const siteTitle = 'bellsnotes';

export default function Layout({ children, home }) {
  return (
    <div className='container'>
      <Head>
        <link rel='icon' href='/pen.png' />
        <meta name='description' content='Online notebook' />
        <meta
          property='og:image'
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header>
        {home ? (
          <>
            <h1 className='site-title'>{name}</h1>
          </>
        ) : (
          <>
            <h2 className='site-title'>
              <Link href='/'>
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {/* {!home && (
        <div>
          <Link href='/'>
            <a className='back-home'>← Back to home</a>
          </Link>
        </div>
      )} */}
    </div>
  );
}
