import { getPostDetails, getPosts } from "../../services";
import Head from "next/head";
import { RichText } from "@graphcms/rich-text-react-renderer";

function PostDetails({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <RichText content={post.content.raw} />
      </div>
    </div>
  );
}
export async function getStaticProps({ params }) {
  const post = await getPostDetails(params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
export default PostDetails;
