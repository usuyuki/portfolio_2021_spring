import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export async function getWorksSortedPostsData() {
  const repoUrl = "https://portfolio.usuyuki.net/wp-json/wp/v2/work";
  const response = await fetch(repoUrl);
  const works = await response.json();
  // /posts　配下のファイル名を取得する
  //   const fileNames = fs.readdirSync(postsDirectory);
  const allWorksPostsData = works.map((work) => {
    // id を取得するためにファイル名から ".md" を削除する
    // const id = fileName.replace(/\.md$/, "");
    const id = work.id;
    const title = work.title.rendered;
    const date = work.date_gmt;
    const link = work.link;
    const content = work.content;

    // // マークダウンファイルを文字列として読み取る
    // const fullPath = path.join(postsDirectory, fileName);
    // const fileContents = fs.readFileSync(fullPath, "utf8");

    // // 投稿のメタデータ部分を解析するために gray-matter を使う
    // const matterResult = matter(fileContents);

    // データを id と合わせる
    return {
      id,
      title,
      date,
      link,

      content,
    };
  });
  // 投稿を日付でソートする

  return allWorksPostsData.map(() => {
    return {
      params: {
        id: id,
        title: title,
        date: date,
        link: link,
        content: content,
      },
    };
  });
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
  const files = await response.json();
  const fileNames = files.map((file) => file.name);
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
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
export async function getWorksPostData(id) {
  const repoUrl = `https://api.github.com/repos/deatiger/next-tutorial-torasemi/contents/posts/${id}.md`;
  const response = await fetch(repoUrl);
  const file = await response.json();

  const fileContents = base64.decode(file.content); //base64のdecode()メソッド

  // 投稿のメタデータ部分を解析するために gray-matter を使う
  const matterResult = matter(fileContents);

  // マークダウンを HTML 文字列に変換するために remark を使う
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // データを id および contentHtml と組み合わせる
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
