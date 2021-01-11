import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

import { getBlogsSortedPostsData } from "../../lib/WPBlogs";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function FirstPost({ allBlogsData }) {
  return (
    <Layout>
      <Head>
        <title>All Blogs</title>
      </Head>
      <h1>All Blogs</h1>
      <section className="text-center mx-auto my-5 border border-3 border-gray-300">
        <h2 className="text-center text-2xl mt-5">Latest works</h2>
        <ul className="">
          {allBlogsData.map((data) => (
            <li className="m-5" key={data.id}>
              <Link href={`/works/${data.id}`}>
                <a>{data.title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">{data.date}</small>

              <p>{data.content}</p>
              {/* <p>{data.work_tech}</p> */}
            </li>
          ))}
        </ul>
      </section>
      <h2 className="text-center">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
export async function getStaticProps() {
  const allBlogsData = await getBlogsSortedPostsData();
  //(allBlogsData);
  return {
    props: {
      allBlogsData: allBlogsData,
    },
  };
}
