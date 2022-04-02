import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Posts from "@components/Posts";

import { useFilters } from "@hooks/useFilters";
import { SortingType } from "../types";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/api/posts`);
  const data = await response.json();

  return {
    props: { posts: data },
  };
};

const Home = ({ posts }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [descriptionFilter, setDescriptionFilter] = useState("");

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsAscending(checked);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDescriptionFilter(value);
  };

  const filteredPosts = useFilters(posts, {
    sort: isAscending ? SortingType.ASC : SortingType.DESC,
    filter: {
      name: "description",
      value: descriptionFilter,
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Posts</title>
        <meta name="description" content="Posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <input type="checkbox" checked={isAscending} onChange={handleSortChange} />
        <input type="text" value={descriptionFilter} onChange={handleFilterChange} />

        <Posts posts={filteredPosts} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
