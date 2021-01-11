import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import { getBlogsAllPostIds, getBlogsPostData } from "../../lib/WPworks";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-center font-bold font-2xl">
          {postData.file.title.rendered}
        </h1>
        <p className="mx-4 w-1/2 mx-auto">
          {postData.file.content.rendered.replace(
            /<("[^"]*"|'[^']*'|[^'">])*>/g,
            ""
          )}
        </p>
        <h3 className="text-center font-bold font-xl mt-4 font-blue-600">
          {/* {postData.file.acf.work_tech.map(data)=>
            {data}
          } */}
        </h3>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getBlogsAllPostIds();
  //   paths.then((data) => (data));
  // ("hi")
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // ("ya")
  const postData = await getBlogsPostData(params.id);
  // (postData)
  return {
    props: {
      postData,
    },
  };
}
