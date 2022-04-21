"use strict";
class PostService {
  static async get(slug) {
    try {
      // const response = await fetch("http://localhost:8000/backend/post", {
      //   method: "POST", // *GET, POST, PUT, DELETE, etc.
      //   mode: "cors", // no-cors, *cors, same-origin
      //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      //   credentials: "same-origin", // include, *same-origin, omit
      //   headers: {
      //     "Content-Type": "application/json",
      //     // 'Content-Type': 'application/x-www-form-urlencoded',
      //   },
      //   redirect: "follow", // manual, *follow, error
      //   referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //   body: JSON.stringify({ link: slug }), // body data type must match "Content-Type" header
      // });
      // if (!response.ok) {
      //   throw new Error(`Error! status: ${response.status}`);
      // }
      // const result = await response.json();
      return [];
    } catch (err) {
      console.log(err);
    }
  }
}

export default PostService;
