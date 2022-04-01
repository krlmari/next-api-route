import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Posts.module.css";

const Posts = ({ posts }) => {
  if (!posts) {
    return <p>posts are empty</p>;
  }

  return (
    <div className="">
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className={styles.posts__post}>
              <div>
                <p className={styles.posts__title}>{post.title}</p>
                <div className={styles.posts__image}>
                  <Image src={post.image} alt="" layout="fill" objectFit="cover" />
                </div>
                <p className="">{post.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
