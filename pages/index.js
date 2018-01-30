import Navbar from '../shared/navbar';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>Home page</title>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <Navbar />
    Home
  </div>
);
