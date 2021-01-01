import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import usuyukiStyles from "../styles/usuyuki.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="h-screen w-screen grid grid-cols-10 bg-green-200">
        <aside className="bg-blue-200">
          <p className={usuyukiStyles.tate}>2020 copyrightUsuyuki</p>
        </aside>

        <div className="col-span-8">
          <section className="w-1/2">
            <p className="text-center">大学1年生です。珈琲が好きです。</p>
          </section>

          <aside>
            <nav className="text-white w-1/2 mt-5 bg-gray-400 rounded-full h-12 w-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faTwitter} />
              <section className="mt-5 bg-gray-400 rounded-full h-12 w-12 flex items-center justify-center">
                <p>　</p>
              </section>
            </nav>
          </aside>
          <section
            className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
          >
            <h2 className={utilStyles.headingLg}>Works</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <nav className="bg-yellow-200">
          <p>SNS</p>
        </nav>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
