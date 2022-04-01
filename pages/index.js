import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Posts from "../components/Posts";

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/api/posts`);
    const data = await response.json();

    return {
      props: { posts: data },
    };
  } catch {
    return {
      props: { posts: null },
    };
  }
};

const Home = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Posts posts={posts} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
