import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import usuyukiStyles from "../styles/usuyuki.module.css";

import { getWPBlog, getNote, getQiita } from "../lib/WPAllBlogs";

import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home({ setNote, setWPBlog, setQiita }) {
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
            <li className="m-5" key={setWPBlog[0].id}>
              <Link href={`/blogs/${setWPBlog[0].id}`}>
                <a>{setWPBlog[0].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setWPBlog[0].date}
              </small>

              <p>{setWPBlog[0].content}</p>
              <p>{setWPBlog[0].work_tech}</p>
            </li>
            <li className="m-5" key={setWPBlog[1].id}>
              <Link href={`/blogs/${setWPBlog[1].id}`}>
                <a>{setWPBlog[1].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setWPBlog[1].date}
              </small>

              <p>{setWPBlog[1].content}</p>
              <p>{setWPBlog[1].work_tech}</p>
            </li>
            <li className="m-5" key={setWPBlog[2].id}>
              <Link href={`/blogs/${setWPBlog[2].id}`}>
                <a>{setWPBlog[2].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setWPBlog[2].date}
              </small>

              <p>{setWPBlog[2].content}</p>
              <p>{setWPBlog[2].work_tech}</p>
            </li>
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <Link href="/archive/allBlogs">
              <a className="hover:text-white">Show more</a>
            </Link>
          </button>
        </article>

        <h2 className="my-10 mx-auto text-center font-bold text-2xl">note</h2>
        <article className="p-5 mx-10 border-green-500 border-2">
          <h2 className="text-center text-2xl mt-5">Latest Blogs</h2>
          <ul className="">
            <li className="m-5" key={setNote[0].id}>
              <Link href={`/blogs/${setNote[0].id}`}>
                <a>{setNote[0].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setNote[0].date}
              </small>

              <p>{setNote[0].content}</p>
              <p>{setNote[0].work_tech}</p>
            </li>
            <li className="m-5" key={setNote[1].id}>
              <Link href={`/blogs/${setNote[1].id}`}>
                <a>{setNote[1].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setNote[1].date}
              </small>

              <p>{setNote[1].content}</p>
              <p>{setNote[1].work_tech}</p>
            </li>
            <li className="m-5" key={setNote[2].id}>
              <Link href={`/blogs/${setNote[2].id}`}>
                <a>{setNote[2].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setNote[2].date}
              </small>

              <p>{setNote[2].content}</p>
              <p>{setNote[2].work_tech}</p>
            </li>
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <Link href="/archive/allBlogs">
              <a className="hover:text-white">Show more</a>
            </Link>
          </button>
        </article>
        <h2 className="my-10 mx-auto text-center font-bold text-2xl">Qiita</h2>
        <article className="p-5 mx-10 border-green-500 border-2">
          <h2 className="text-center text-2xl mt-5">Latest Blogs</h2>
          <ul className="">
            <li className="m-5" key={setQiita[0].id}>
              <Link href={`/blogs/${setQiita[0].id}`}>
                <a>{setQiita[0].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[0].date}
              </small>

              <p>{setQiita[0].content}</p>
              <p>{setQiita[0].work_tech}</p>
            </li>
            <li className="m-5" key={setQiita[1].id}>
              <Link href={`/blogs/${setQiita[1].id}`}>
                <a>{setQiita[1].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[1].date}
              </small>

              <p>{setQiita[1].content}</p>
              <p>{setQiita[1].work_tech}</p>
            </li>
            <li className="m-5" key={setQiita[2].id}>
              <Link href={`/blogs/${setQiita[2].id}`}>
                <a>{setQiita[2].title}</a>
              </Link>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[2].date}
              </small>

              <p>{setQiita[2].content}</p>
              <p>{setQiita[2].work_tech}</p>
            </li>
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <Link href="/archive/allBlogs">
              <a className="hover:text-white">Show more</a>
            </Link>
          </button>
        </article>
        <h2 className="my-10 mx-auto text-center font-bold text-2xl">Zenn</h2>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  // (data);
  const setWPBlog = await getWPBlog();
  const setNote = await getNote();
  const setQiita = await getQiita();
  console.log(setQiita);
  // (allWorksData);
  // console.log(setWPBlog);
  return {
    props: {
      setQiita: setQiita,
      setNote: setNote,
      setWPBlog: setWPBlog,
    },
  };
}
