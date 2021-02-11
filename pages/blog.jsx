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
        <article className="my-5 p-5 mx-10 border-green-500 border-2">
          {/* ここからブログ */}

          <h2 className="mt-5 mb-10 mx-auto text-center font-bold text-2xl">
            うすゆきブログ
          </h2>
          <ul className="">
            <li className="m-5" key={setWPBlog[0].id}>
              <a href={setWPBlog[0].link} target="_blank">
                {setWPBlog[0].title}
              </a>

              <br />
              <small className="text-center text-gray-600">
                {setWPBlog[0].date}
              </small>

              <p>{setWPBlog[0].content}</p>
            </li>
            <li className="m-5" key={setWPBlog[1].id}>
              <a href={setWPBlog[1].link} target="_blank">
                {setWPBlog[1].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setWPBlog[1].date}
              </small>

              <p>{setWPBlog[1].content}</p>
            </li>
            <li className="m-5" key={setWPBlog[2].id}>
              <a href={setWPBlog[2].link} target="_blank">
                {setWPBlog[2].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setWPBlog[2].date}
              </small>

              <p>{setWPBlog[2].content}</p>
            </li>
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <a
              href="https://blog.usuyuki.net/"
              className="hover:text-white"
              target="_blank"
            >
              Show more
            </a>
          </button>
        </article>

        <article className="my-5 p-5 mx-10 border-green-500 border-2">
          <h2 className="mt-5 mb-10 mx-auto text-center font-bold text-2xl">
            Note
          </h2>
          <ul className="">
            <li className="m-5" key={setNote[0].id}>
              <a href={setNote[0].link} target="_blank">
                {setNote[0].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setNote[0].date}
              </small>

              <p>{setNote[0].content}</p>
            </li>
            <li className="m-5" key={setNote[1].id}>
              <a href={setNote[1].link} target="_blank">
                {setNote[1].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setNote[1].date}
              </small>

              <p>{setNote[1].content}</p>
            </li>
            <li className="m-5" key={setNote[2].id}>
              <a href={setNote[2].link} target="_blank">
                {setNote[2].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setNote[2].date}
              </small>

              <p>{setNote[2].content}</p>
            </li>
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <a
              href="https://note.com/usuyuki26"
              className="hover:text-white"
              target="_blank"
            >
              Show more
            </a>
          </button>
        </article>

        <article className="my-5 p-5 mx-10 border-green-500 border-2">
          <h2 className="mt-5 mb-10 mx-auto text-center font-bold text-2xl">
            Qiita
          </h2>
          <ul className="">
            <li className="m-5" key={setQiita[0].id}>
              <a href={setQiita[0].link} target="_blank">
                {setQiita[0].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[0].date}
              </small>

              <p>{setQiita[0].content}</p>
            </li>
            <li className="m-5" key={setQiita[1].id}>
              <a href={setQiita[1].link} target="_blank">
                {setQiita[1].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[1].date}
              </small>

              <p>{setQiita[1].content}</p>
            </li>
            <li className="m-5" key={setQiita[2].id}>
              <a href={setQiita[2].link} target="_blank">
                {setQiita[2].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[2].date}
              </small>

              <p>{setQiita[2].content}</p>
            </li>
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <a
              href="https://qiita.com/Usuyuki"
              className="hover:text-white"
              target="_blank"
            >
              Show more
            </a>
          </button>
        </article>

        <article className="my-5 p-5 mx-10 border-green-500 border-2">
          <h2 className="mt-5 mb-10 mx-auto text-center font-bold text-2xl">
            Zenn
          </h2>
          <p className="text-center mt-5">
            Zennはまだ正式なAPIがないため、手動での掲載となっております。
          </p>

          <ul className="">
            <li className="m-5" key="usuyuki26">
              <a
                href="https://zenn.dev/usuyuki/articles/1c365f4f34f62b"
                target="_blank"
              >
                Python, JS, PHP, Cを同時期に学習することは難しい。
              </a>
              <br />
              <small className="text-center text-gray-600">2021/1/12</small>

              <p>
                初心者です。趣味でJavaScript、仕事でPHP、大学講義でPython、C言語を触ってます。
                これら4つの言語を1年後期という同時期に学習中ということでかなり頭がこんがらがっています。
                皆さん大好きHello
                Worldを出力する関数の時点から仕様が違ってるんです。その点についてコードと共に述べます。…………(続く)
              </p>
            </li>
            {/* <li className="m-5" key={setQiita[1].id}>
              <a href={setQiita[1].link} target="_blank">
                {setQiita[1].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[1].date}
              </small>

              <p>{setQiita[1].content}</p>
            </li>
            <li className="m-5" key={setQiita[2].id}>
              <a href={setQiita[2].link} target="_blank">
                {setQiita[2].title}
              </a>
              <br />
              <small className="text-center text-gray-600">
                {setQiita[2].date}
              </small>

              <p>{setQiita[2].content}</p>
            </li> */}
          </ul>
          <button className="mx-5 text-center rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
            <a
              href="https://zenn.dev/usuyuki"
              className="hover:text-white"
              target="_blank"
            >
              Show more
            </a>
          </button>
        </article>
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
