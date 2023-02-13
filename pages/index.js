/* eslint-disable import/extensions */
import Head from 'next/head';

import styles from './Home.module.scss';
import Home from '@/views/Home';
import Layout from '@/components/layout';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Home Page</title>
      </Head>
      <Layout invert>
        <Home />
      </Layout>
    </div>
  );
}
