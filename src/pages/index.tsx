import axios from "axios";
import { InferGetStaticPropsType } from "next";
import { Layout } from "../components/layout";
import { Post } from "../../types";
import { Card } from "src/components/layout/Card/Card";
import styles from "../styles/index.module.sass";

export const getStaticProps = async () => {
  const res = await axios.get("http://localhost:3000/api/posts");
  const posts: Post[] = res.data;

  return {
    props: {
      posts
    }
  }
}

const Home: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ posts }) => {
  return (
    <Layout>
      <h1 className="color-primary">Check out our latest Posts</h1>
      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default Home;




