"use strict";
const getRequestHeaders = { "Content-Type": "application/json" };
class NewsService {
  static async get() {
    try {
      const response = await fetch("https://nprussia.org/backend/news");
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default NewsService;
