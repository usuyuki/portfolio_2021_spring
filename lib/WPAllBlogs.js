import fetch from "node-fetch";

export async function getWPBlog() {
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

  return allBlogsPostsData;
}

export async function getNote() {
  const repoUrl =
    "https://note.com/api/v2/creators/usuyuki26/contents?kind=note";
  const response = await fetch(repoUrl);
  const blogs = await response.json();
  // const blogs = rawBlogs.contents;
  // console.log(blogs);
  const blogsContent = blogs.data.contents;
  // console.log("あああああああああ");
  // console.log(blogsContent);

  // /posts　配下のファイル名を取得する
  //   const fileNames = fs.readdirSync(postsDirectory);
  //
  // const id = blog.id;
  // const title = blog.name;
  // const date = blog.date_gmt;
  // const link = blog.noteUrl;
  // const contentRaw = blog.body;

  const allNote = blogsContent.map((blog) => {
    // id を取得するためにファイル名から ".md" を削除する
    // const id = fileName.replace(/\.md$/, "");
    const id = blog.id;
    const title = blog.name;
    const date = blog.publishAt;
    const link = blog.noteUrl;
    const contentRaw = blog.body;
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

  return allNote;
}

export async function getQiita() {
  const accessToken = "9af2e43b28d02a2348078cc0125b50a895e1bfd4";
  const repoUrl =
    "https://qiita.com/api/v2/users/Usuyuki/items?page=1&per_page=5";
  const response = await fetch(repoUrl);
  const blogs = await response.json();
  // const blogs = rawBlogs.contents;

  // console.log("あああああああああ");
  // console.log(blogsContent);

  // /posts　配下のファイル名を取得する
  //   const fileNames = fs.readdirSync(postsDirectory);
  //
  // const id = blog.id;
  // const title = blog.name;
  // const date = blog.date_gmt;
  // const link = blog.noteUrl;
  // const contentRaw = blog.body;

  const allQiita = blogs.map((blog) => {
    // id を取得するためにファイル名から ".md" を削除する
    // const id = fileName.replace(/\.md$/, "");
    const id = blog.id;
    const title = blog.title;
    const date = blog.updated_at;
    const link = blog.url;
    const contentRaw = blog.rendered_body;
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

  return allQiita;
}
