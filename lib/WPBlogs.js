import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getBlogsSortedPostsDataProcessed() {
  const repoUrl = "https://blog.usuyuki.net/wp-json/wp/v2/posts/";
  const response = await fetch(repoUrl);
  const works = await response.json();
  // /posts　配下のファイル名を取得する
  //   const fileNames = fs.readdirSync(postsDirectory);
  //

  const allBlogsPostsData = works.map((work) => {
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

  // const encoded = allBlogsPostsData.map(({ id, title, date, content }) => (
  //   <li className="m-5" key={id}>
  //     <Link href={`/posts/${id}`}>
  //       <a>{title}</a>
  //     </Link>
  //     <br />
  //     <small className="text-center text-gray-600">{date}</small>
  //     <p>{content}</p>
  //   </li>
  // ));
  //
  return allBlogsPostsData;
}

export async function getBlogsSortedPostsData() {
  const repoUrl = "https://blog.usuyuki.net/wp-json/wp/v2/posts/";
  const response = await fetch(repoUrl);
  const blogs = await response.json();
  // /posts　配下のファイル名を取得する
  //   const fileNames = fs.readdirSync(postsDirectory);
  //

  const allBlogsPostsData = blogs.map((blog) => {
    // id を取得するためにファイル名から ".md" を削除する
    // const id = fileName.replace(/\.md$/, "");
    const id = blog.id;
    const title = blog.title.rendered;
    const date = blog.date_gmt;
    const link = blog.link;
    const contentRaw = blog.content.rendered;
    const contentRemovedTags = contentRaw.replace(
      /<("[^"]*"|'[^']*'|[^'">])*>/g,
      ""
    );
    // console.log(contentRemovedTags.length);
    const content =
      contentRemovedTags.length >= 200
        ? contentRemovedTags.substr(0, 200) + "…………(続く)"
        : contentRemovedTags;
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

  // (allBlogsPostsData));
  // return JSON.parse(allBlogsPostsData);
  // BlogsPostsData);
  return allBlogsPostsData;
  // return allBlogsPostsData.sort((a, b) => {
  //   if (a.date < b.date) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
}
// export async function getBlogsSortedPostsData() {
//     // ファイルシステムのかわりに、
//     // 外部の API エンドポイントから投稿データを取得する
//     const res = await fetch("");
//     return res.json();
//   }

export async function getBlogsAllPostIds() {
  //   const fileNames = fs.readdirSync(postsDirectory);
  const repoUrl = "https://blog.usuyuki.net/wp-json/wp/v2/posts/";
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
  // osts);
  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getBlogsPostData(id) {
  const repoUrl = `https://blog.usuyuki.net/wp-json/wp/v2/posts/${id}`;
  const response = await fetch(repoUrl);
  const file = await response.json();

  // データを id および contentHtml と組み合わせる
  return {
    file,
  };
}
