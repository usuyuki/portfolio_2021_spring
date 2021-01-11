import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getWorksSortedPostsDataProcessed() {
  const repoUrl = "https://blog.usuyuki.net/wp-json/wp/v2/";
  const response = await fetch(repoUrl);
  const works = await response.json();
  // /posts　配下のファイル名を取得する
  //   const fileNames = fs.readdirSync(postsDirectory);
  // console.log(works);

  const allWorksPostsData = works.map((work) => {
    // id を取得するためにファイル名から ".md" を削除する
    // const id = fileName.replace(/\.md$/, "");
    const id = work.id;
    const title = work.title.rendered;
    const date = work.date_gmt;
    const link = work.link;
    const content = work.content;

    // データを id と合わせる
    return {
      id,
      title,
      date,
      link,
      content,
    };
  });

  // const encoded = allWorksPostsData.map(({ id, title, date, content }) => (
  //   <li className="m-5" key={id}>
  //     <Link href={`/posts/${id}`}>
  //       <a>{title}</a>
  //     </Link>
  //     <br />
  //     <small className="text-center text-gray-600">{date}</small>
  //     <p>{content}</p>
  //   </li>
  // ));
  // console.log(encoded);
  return allWorksPostsData;
}
async function getACF(id) {
  const detailUrl = "https://portfolio.usuyuki.net/wp-json/acf/v3/work" + id;
  const response = await detailUrl(repoUrl);
  const works = await response.json();
  //console.log(works);
  return works;
}
export async function getWorksSortedPostsData() {
  const repoUrl = "https://portfolio.usuyuki.net/wp-json/wp/v2/work";
  const response = await fetch(repoUrl);
  const works = await response.json();
  // /posts　配下のファイル名を取得する
  //   const fileNames = fs.readdirSync(postsDirectory);
  // console.log(works);

  const allWorksPostsData = works.map((work) => {
    // id を取得するためにファイル名から ".md" を削除する
    // const id = fileName.replace(/\.md$/, "");
    const id = work.id;
    const title = work.title.rendered;
    const date = work.date_gmt;
    const link = work.link;
    const contentRaw = work.content.rendered;
    const content = contentRaw.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    // const works = await getACF(id);

    // const date = works.acf.work_start;
    // const work_tech = works.acf.work_tech;

    // データを id と合わせる
    // return {
    //   id: id,
    //   title: title,
    //   date: date,
    //   link: link,
    //   content: content,
    // };
    return {
      id,
      title,
      date,
      link,
      content,
      // work_tech,
    };
  });
  // 投稿を日付でソートする

  // console.log(JSON.parse(allWorksPostsData));
  // return JSON.parse(allWorksPostsData);
  // console.log(typeof allWorksPostsData);
  return allWorksPostsData;
  // return allWorksPostsData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
}
// export async function getWorksSortedPostsData() {
//     // ファイルシステムのかわりに、
//     // 外部の API エンドポイントから投稿データを取得する
//     const res = await fetch("");
//     return res.json();
//   }

export async function getWorksAllPostIds() {
  //   const fileNames = fs.readdirSync(postsDirectory);
  const repoUrl = "https://portfolio.usuyuki.net/wp-json/wp/v2/work";
  const response = await fetch(repoUrl);
  const posts = await response.json();

  // 以下のような配列を返します:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  // console.log("post" + posts);
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getWorksPostData(id) {
  const repoUrl = `https://portfolio.usuyuki.net/wp-json/wp/v2/work/${id}`;
  const response = await fetch(repoUrl);
  const file = await response.json();

  // データを id および contentHtml と組み合わせる
  return {
    file,
  };
}
