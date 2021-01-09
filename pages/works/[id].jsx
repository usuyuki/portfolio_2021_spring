import Layout from "../../components/layout";
// import { getAllPostIds, getPostData } from "../../lib/posts";
import { getWorksAllPostIds, getWorksPostData } from "../../lib/WPworks";
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
          {postData.file.content.rendered.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")}
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
  const paths = await getWorksAllPostIds();
  //   paths.then((data) => console.log(data));
  // console.log("hi")
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log("ya")
  const postData = await getWorksPostData(params.id);
  console.log(postData)
  return {
    props: {
      postData,
    },
  };
}
