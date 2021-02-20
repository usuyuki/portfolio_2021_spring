import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import usuyukiStyles from "../styles/usuyuki.module.css";

import { getWorksSortedPostsData } from "../lib/WPworks";
import { getBlogsSortedPostsData } from "../lib/WPBlogs";
import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { BaseHeader } from "../components/layouts/BaseHeader";
import { TopCircleMenu } from "../components/layouts/TopCircleMenu";
export default function Home({ allWorksData, allBlogsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className=" w-screen">
        {/*  ヘッダー */}
        <BaseHeader />
        <TopCircleMenu />

        <div className="loading mx-auto">
          <span className="title  text-center">CONSTRUCTING</span>
          <span className="circle1"></span>
          <span className="circle2"></span>
          <span className="circle3"></span>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  // (data);
  const allBlogsData = await getBlogsSortedPostsData();
  const allWorksData = await getWorksSortedPostsData();
  // (allWorksData);
  // console.log(allBlogsData);
  return {
    props: {
      allWorksData: allWorksData,
      allBlogsData: allBlogsData,
    },
  };
}
