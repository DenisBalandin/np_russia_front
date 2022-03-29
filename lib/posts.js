import BlogService from "./services/BlogService"
import NewsService from "./services/NewsService"

export async function getAllPostIds() {
  const fileNames1 = await BlogService.get();
  const fileNames2 = await NewsService.get();
  const fileNames = await fileNames1.concat(fileNames2);
  return fileNames.map(fileName => {
    return {params : 
              {slug: fileName.slug.replace(/\.md$/, '')}
            }
  })
}

export async function getPostData(id, news) {
  const postData = news ? await NewsService.get() : await BlogService.get();
  let post;
  postData.map((item)=> {
    if (item.slug == id) { post = item }
  })
  return {id, post}
}