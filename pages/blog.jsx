import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import usuyukiStyles from "../styles/usuyuki.module.css";

import { getWPBlog, getNote } from "../lib/WPAllBlogs";

import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home({ setNote, setWPblog }) {
  return (
    <Layout home>
      <Head>
        <title>ブログ-{siteTitle}</title>
      </Head>
      <main className="">
        <h2 className="my-10 mx-auto text-center font-bold text-2xl">
          うすゆきブログ
        </h2>
        <article className="p-5 mx-10 border-green-500 border-2">
          {/* ここからブログ */}

          <h2 className="text-center text-2xl mt-5">Latest Blogs</h2>
          <ul className="">
            <li className="m-5" key={setWPblog[0].id}>
              <Link href={`/blogs/${setWPblog[0].id}`}>
                <a>{setWPblog[0].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setWPblog[0].date}
              </small>

              <p>{setWPblog[0].content}</p>
              <p>{setWPblog[0].work_tech}</p>
            </li>
            <li className="m-5" key={setWPblog[1].id}>
              <Link href={`/blogs/${setWPblog[1].id}`}>
                <a>{setWPblog[1].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setWPblog[1].date}
              </small>

              <p>{setWPblog[1].content}</p>
              <p>{setWPblog[1].work_tech}</p>
            </li>
            <li className="m-5" key={setWPblog[1].id}>
              <Link href={`/blogs/${setWPblog[1].id}`}>
                <a>{setWPblog[1].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setWPblog[1].date}
              </small>

              <p>{setWPblog[1].content}</p>
              <p>{setWPblog[1].work_tech}</p>
            </li>
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <Link href="/archive/allBlogs">
              <a className="hover:text-white">Show more</a>
            </Link>
          </button>
        </article>

        <h2 className="my-10 mx-auto text-center font-bold text-2xl">note</h2>
        <h2 className="my-10 mx-auto text-center font-bold text-2xl">Qiita</h2>
        <h2 className="my-10 mx-auto text-center font-bold text-2xl">Zenn</h2>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  // (data);
  const setWPblog = await getWPBlog();
  const setNote = await getNote();

  // (allWorksData);
  // console.log(setWPblog);
  return {
    props: {
      setNote: setNote,
      setWPblog: setWPblog,
    },
  };
}
