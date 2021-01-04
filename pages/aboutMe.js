import Link from "next/link";

export default function AboutMe() {
  return (
    <main className="mx-40 my-40">
      <h1 className="text-3xl text-center text-blue-500 ">About Me</h1>
      <section className="border border-2 border-purple-400 my-12 py-12 rounded-3xl ">
        <p className="text-center">
          宇都宮大学工学部基盤工学部1年。
          <br />
          2002年生まれの18歳です。
        </p>
      </section>
      <section className="border border-2 border-purple-400 my-12 py-12 rounded-3xl ">
        <h2 className="text-center text-xl mb-4 text-blue-500 ">
          Educational background
        </h2>
        <p className="mx-auto w-1/3 text-left">
          2020年
          <span className="border-b-2 border-black ">
            宇都宮大学工学部基盤工学科
          </span>
          入学
          <br />
        </p>
      </section>
      <section className="border border-2 border-purple-400 my-12 py-12 rounded-3xl ">
        <h2 className="text-center text-xl mb-4 text-blue-500 ">
          Work history
        </h2>
        <p className="mx-auto w-1/3 text-right">
          2020年{" "}
          <span className="border-b-2 border-black ">株式会社サクシード</span>{" "}
          アルバイト(～現在)
          <br />
          2020年{" "}
          <span className="border-b-2 border-black ">
            つばめソリューション
          </span>{" "}
          アルバイト(～現在)
        </p>
      </section>
      <section className="border border-2 border-purple-400 my-12 py-12 rounded-3xl ">
        <h2 className="text-center text-xl mb-4 text-blue-500 ">
          Organization
        </h2>
        <p className="mx-auto w-1/3 text-left">
          2020年 <span className="border-b-2 border-black ">U-lab</span>(～現在)
          <br />
          2020年{" "}
          <span className="border-b-2 border-black ">
            みんなで放送コンテスト2020実行委員会
          </span>
        </p>
      </section>
      <h2 className="text-center mt-40">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </main>
  );
}
