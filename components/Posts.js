import Image from "next/image";
import styles from "../styles/Posts.module.css";

const Posts = ({ posts }) => {
  if (!posts) {
    return <p>posts are empty</p>;
  }

  return (
    <div className={styles.posts}>
      <h1 className={styles.title}>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div className={styles.post}>
              <div>
                <p className={styles.title}>{post.title}</p>
                <div className={styles.image}>
                  <Image src={post.image} alt="image from post" layout="fill" objectFit="cover" />
                </div>
                <p className={styles.description}>{post.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
