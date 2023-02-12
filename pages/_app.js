import Head from 'next/head';
import { Lato } from '@next/font/google';

import Layout from '@/components/layout';

import '@/styles/globals.scss';
import { SidebarProvider } from '@/lib/SidebarProvider';

const font = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
        />
      </Head>
      <main id="modal-root" className={font.className}>
        <SidebarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SidebarProvider>
      </main>
    </>
  );
}
