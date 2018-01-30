import Navbar from '../shared/navbar';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <title>About page</title>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <Navbar />
    About
  </div>
);
