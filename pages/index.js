import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import usuyukiStyles from "../styles/usuyuki.module.css";
import { getSortedPostsData } from "../lib/posts";
import { getWorksSortedPostsData } from "../lib/WPworks";
import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home({ allWorksPostsData, allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="h-screen w-screen grid grid-cols-10 ">
        <aside className="">
          <p className={usuyukiStyles.copyright}>copyright 2020 usuyuki</p>
        </aside>

        <div className="col-span-8">
          <section className="">
            <p className="text-center mx-auto">
              大学1年生です。珈琲が好きです。
            </p>
          </section>

          <section className="text-center mx-auto my-5 border border-3 border-gray-300">
            <h2 className="text-center text-2xl mt-5">Latest works</h2>
            <ul className="">
              {allWorksPostsData.map((data) => (
                <li className="m-5" key={data.id}>
                  <Link href={`/works/${data.id}`}>
                    <a>{data.title.rendered}</a>
                  </Link>
                  <br />
                  <small className="text-center text-gray-600">
                    {data.date_gmt}
                  </small>
                  <p>{data.content.rendered}</p>
                </li>
              ))}
            </ul>
            <button className="rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
              <Link href="/archive/allWorks">
                <a class="hover:text-white">Show more</a>
              </Link>
            </button>
          </section>
          <section className="text-center mx-auto my-5 border border-3 border-gray-300">
            <h2 className="text-center text-2xl mt-5">Latest articles</h2>
            <ul className="">
              {allPostsData.map(({ id, date, title }) => (
                <li className="m-5" key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className="text-center text-gray-600">
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
            <button className="rounded border border-4 text-blue-800 border-purple-700 py-1 px-2 mb-5 hover:bg-purple-700 hover:text-white animation-ping duration-1000">
              <Link href="/archive/allArticles.js">
                <a class="hover:text-white">Show more</a>
              </Link>
            </button>
          </section>
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
  const repoUrl = "https://portfolio.usuyuki.net/wp-json/wp/v2/work";
  const response = await fetch(repoUrl);
  const data = await response.json();
  // console.log(data);
  const allPostsData = getSortedPostsData();

  const allWorksPostsData = data;
  return {
    props: {
      allPostsData,
      allWorksPostsData,
    },
  };
}
