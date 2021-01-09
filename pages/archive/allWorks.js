import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/posts";
import { getWorksSortedPostsData } from "../lib/WPworks";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>All Works</title>
      </Head>
      <h1>All Works</h1>
      <section className="text-center mx-auto my-5 border border-3 border-gray-300">
        <h2 className="text-center text-2xl mt-5">Latest works</h2>
        <ul className="">
          {/* {for(allWorksData of works){
                <li className="m-5" key={works.id}>
                <Link href={`/works/${works.id}`}>
                  <a>{works.title}</a>
                </Link>
                <br />
                <small className="text-center text-gray-600">
                  {works.date}
                </small>
           
                <p>{works.content}</p>
              </li>
              };} */}
          {/* <p>{allWorksData}</p> */}
          {allWorksData.map((data) => (
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
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
export function getStaticProps() {
  const allPostsData = getSortedPostsData();

  const allWorksPostsData = JSON.stringify(getWorksSortedPostsData());
  return {
    props: {
      allPostsData,
      allWorksPostsData,
    },
  };
}
