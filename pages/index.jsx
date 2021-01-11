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

export default function Home({ allWorksData, allBlogsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className=" w-screen grid grid-cols-10 ">
        <aside className="">
          <p className={usuyukiStyles.copyright}>copyright 2020 usuyuki</p>
        </aside>

        <div className="col-span-8">
          <section className="">
            <p className="text-center mx-auto">
              大学1年生です。珈琲が好きです。
            </p>
            <div className="text-center mt-4">
              <button className="mx-auto text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
                <Link href="/aboutMe">
                  <a className="hover:text-white">Show about me more</a>
                </Link>
              </button>
            </div>
          </section>
          <div className=" grid grid-cols-2  gap-4">
            <section className="text-center mx-auto my-5 border border-3  border-gray-600 rounded-2xl  ">
              <h2 className="text-center text-2xl mt-5">Latest works</h2>
              <ul className="">
                <li className="m-5" key={allWorksData[0].id}>
                  <Link href={`/works/${allWorksData[0].id}`}>
                    <a>{allWorksData[0].title}</a>
                  </Link>
                  <br />
                  <small className="text-center text-gray-600">
                    {allWorksData[0].date}
                  </small>

                  <p>{allWorksData[0].content}</p>
                  <p>{allWorksData[0].work_tech}</p>
                </li>
                <li className="m-5" key={allWorksData[1].id}>
                  <Link href={`/works/${allWorksData[1].id}`}>
                    <a>{allWorksData[1].title}</a>
                  </Link>
                  <br />
                  <small className="text-center text-gray-600">
                    {allWorksData[1].date}
                  </small>

                  <p>{allWorksData[1].content}</p>
                  <p>{allWorksData[1].work_tech}</p>
                </li>
              </ul>
              <button className="rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
                <Link href="/archive/allWorks">
                  <a class="hover:text-white">Show more</a>
                </Link>
              </button>
            </section>
            {/* ここからブログ */}
            <section className="text-center  my-5 border border-3 border-gray-600 rounded-2xl  ">
              <h2 className="text-center text-2xl mt-5">Latest Blogs</h2>
              <ul className="">
                <li className="m-5" key={allBlogsData[0].id}>
                  <Link href={`/works/${allBlogsData[0].id}`}>
                    <a>{allBlogsData[0].title}</a>
                  </Link>
                  <br />
                  <small className="text-center text-gray-600">
                    {allBlogsData[0].date}
                  </small>

                  <p>{allBlogsData[0].content}</p>
                  <p>{allBlogsData[0].work_tech}</p>
                </li>
                <li className="m-5" key={allBlogsData[1].id}>
                  <Link href={`/blogs/${allBlogsData[1].id}`}>
                    <a>{allBlogsData[1].title}</a>
                  </Link>
                  <br />
                  <small className="text-center text-gray-600">
                    {allBlogsData[1].date}
                  </small>

                  <p>{allBlogsData[1].content}</p>
                  <p>{allBlogsData[1].work_tech}</p>
                </li>
              </ul>
              <button className="rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
                <Link href="/archive/allBlogs">
                  <a class="hover:text-white">Show more</a>
                </Link>
              </button>
            </section>
          </div>
        </div>
        <nav className={usuyukiStyles.fixedSocial}>
          <p>Social</p>
          <a href="https://twitter.com/usuyuki26" className="text-gray-800">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/Usuyuki" className="text-gray-800">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </nav>
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
