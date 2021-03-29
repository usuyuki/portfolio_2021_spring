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
// import { BaseHeader } from "../components/layouts/BaseHeader";
// import { TopCircleMenu } from "../components/layouts/TopCircleMenu";

import Image from "next/image";
// Import Swiper styles

import TopCircle from "../components/topcircle";
import TopMainButton from "../components/button/topMainButton";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay, Navigation, Pagination, Scrollbar, A11y]);
export default function Home({ allWorksData, allBlogsData }) {
  const swiperSetting = {
    // initialSlide: 0,
    spaceBetween: 0,
    slidesPerView: 1,
    // centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    loop: true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main className="scroller w-screen">
        <article className="scroll-area ">
          <TopCircle circleName={"usuyuki portfolio"} />
        </article>
        <article className="scroll-area flex justify-center flex-wrap my-64">
          <div className="md:w-1/2 w-full">
            <div className="md:mr-4 md:ml-12">
              <div className="w-100  bg-black text-white p-4 md:order-1 order-2">
                <p>[usuyuki@usuyuki-portfolio ~]$ ls -a</p>
                <p>Python　JavaScript　PHP　HTML　CSS　</p>
                <br />

                <p>
                  [usuyuki@usuyuki-portfolio ~]$
                  <span className="cursor">|</span>
                </p>
              </div>
            </div>
          </div>
          <div className=" md:w-1/2 w-full md:order-last order-first">
            <div className="md:ml-4">
              <h1 className="text-center text-3xl mt-12 mb-4">
                Loves Enginnering
                <span className="material-icons">&#xE87C;</span>
              </h1>
            </div>
          </div>
        </article>

        {/* <article className="scroll-area flex justify-center flex-wrap my-16">
          <div className="md:mr-12 w-full"></div>
          <div className="md:ml-12 md:w-1/2 w-full"></div>
        </article> */}
        <article className="scroll-area flex justify-center my-16 flex-wrap">
          <div className=" md:w-1/2 w-full">
            <div className="md:mr-4">
              <h2 className="text-3xl text-center mb-4">Loves Coffee</h2>
              <p className="text-lg mx-auto px-8">
                珈琲の良さはなんと言ってもオリジナリティです。とりわけドリップコーヒーでは同じ味になることは殆どありません。温度や抽出時間、挽目を変えるだけで違った味わいが楽しめます。
              </p>
              <TopMainButton
                className="mx-auto"
                name={"詳しく見る"}
                link={"/coffee"}
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <div className="md:ml-4  mx-auto text-center ">
              <Image
                src="/images/top/coffeeProcess2.jpg"
                className="radius-img"
                width={300}
                height={300}
              />
              <div className="yuge w-1/3 mx-auto mb-24"></div>
            </div>
          </div>
        </article>
        <article className="scroll-area flex justify-center my-64 flex-wrap">
          <div className=" md:w-1/2 w-full">
            <div className="md:mr-4 mx-auto text-center rounded-2xl d-inline-block"></div>
          </div>
          <div className=" md:w-1/2 w-full">
            <div className="md:ml-4">
              <h2 className="text-3xl text-center mb-4">Loves Books</h2>
            </div>
          </div>
        </article>
        <article className="scroll-area flex justify-center my-64 flex-wrap">
          <div className="">
            <h2 className="text-3xl text-center mb-4">Loves TrainTravel</h2>
            <p class="ledText">
              <span>
                グリーン車は４号車・５号車です。この列車は、全車自由席です。
              </span>
            </p>
          </div>
        </article>
        {/* <article className="scroll-area flex justify-center my-64 flex-wrap">
          <div className=" md:w-1/2 w-full">
            <div className="md:mr-4"></div>
          </div>
          <div className=" md:w-1/2 w-full">
            <div className="md:ml-4"></div>
          </div>
        </article> */}
        <article className="scroll-area flex justify-center my-64 flex-wrap">
          <div className=" md:w-1/2 w-full">
            <div className="md:mr-4">
              <h2 className="text-2xl">Loves Books</h2>
            </div>
          </div>
          <div>読書メーターへ行く！</div>
          <a href="https://bookmeter.com/users/1141982">
            {" "}
            <Image
              src="/images/top/coffeeProcess2.jpg"
              className="rounded-full"
              width={300}
              height={300}
            />
          </a>
        </article>

        {/* <div className="mx-auto w-1/2 mt-10">
          <div className="mx-10 radius-wrapper w-50">
            <Image
              src="/images/top/coffeeProcess2.jpg"
              className="rounded-2xl"
              width={300}
              height={300}
            />
          </div>
          <p className="text-lg mx-10">
            珈琲の良さはなんと言ってもオリジナリティです。とりわけドリップコーヒーでは同じ味になることは殆どありません。温度や抽出時間、挽目を変えるだけで違った味わいが楽しめます。
          </p>
        </div> */}
        <article className="scroll-area">
          <div className=" loading mx-auto mt-20 ">
            <span className="title  text-center">CONSTRUCTING</span>
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
          </div>
        </article>
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
