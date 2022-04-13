"use strict";
const getRequestHeaders = { "Content-Type": "application/json" };
class NewsService {
  static async get() {
    try {
      const response = await fetch("http://localhost:5001/news");
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result)
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default NewsService;
