import Head from "next/head";
import Layout, { siteTitle } from "../../components/layout";

import { getWorksSortedPostsData } from "../../lib/WPworks";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function FirstPost({ allWorksData }) {
  return (
    <Layout>
      <Head>
        <title>All Works</title>
      </Head>
      <h1>All Works</h1>
      <section className="text-center mx-auto my-5 border border-3 border-gray-300">
        <h2 className="text-center text-2xl mt-5">Latest works</h2>
        <ul className="">
          
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
      <h2 className="text-center">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
export async function getStaticProps() {
  const allWorksData = await getWorksSortedPostsData();
  //console.log(allWorksData);
  return {
    props: {
      allWorksData: allWorksData,
    },
  };
}
