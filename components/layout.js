import Head from 'next/head';
import Link from 'next/link';

const name = 'bellsnotes';
export const siteTitle = 'bellsnotes';

export default function Layout({ children, home }) {
  return (
    <div className='layout'>
      <Head>
        <link rel='icon' href='/milky-way.png' />
        <meta name='description' content='Online notebook' />
        <meta property='og:image' content='/bn.svg' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <div className='container'>
        <header>
          <nav>
            <ul className='nav-list'>
              <li>
                <Link href='/'>
                  <a className='site-title'>{name}</a>
                </Link>
              </li>
              <li>
                <a className='nav-link' href='https://tinyletter.com/davidbell'>
                  newsletter
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        {/* {!home && (
        <div>
          <Link href='/'>
            <a className='back-home'>← Back to home</a>
          </Link>
        </div>
      )} */}
        <footer>
          <nav>
            <ul className='nav-list'>
              <li>
                <Link href='/'>
                  <a className='site-title'>{name}</a>
                </Link>
              </li>
              <li>
                <a className='nav-link' href='https://tinyletter.com/davidbell'>
                  newsletter
                </a>
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}
