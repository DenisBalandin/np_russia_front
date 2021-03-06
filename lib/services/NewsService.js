"use strict";
import config from "../../config.json";

const getRequestHeaders = { "Content-Type": "application/json" };
class NewsService {
  static async get(page = 0) {
    try {
      const response = await fetch(`${config.server.url}/backend/news/${page}`);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  static async getOneByLink(link) {
    try {
      const response = await fetch(
        `${config.server.url}/backend/newspage/${link}`
      );
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response?.json();
      return result?.data;
    } catch (err) {
      console.log(err);
    }
  }
  static async getNewsRowsCount() {
    try {
      const response = await fetch(`${config.server.url}/backend/ncount`);
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response?.json();
      return result?.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default NewsService;
