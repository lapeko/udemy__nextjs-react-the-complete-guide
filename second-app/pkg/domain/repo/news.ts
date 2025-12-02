import Database from "better-sqlite3";
import { join } from "path";

import { NewsItem } from "../entity";

const db = new Database(join(process.cwd(), 'pkg', 'domain', 'repo', 'data.db'));

export const getNews = async () => {
  const news = db.prepare('SELECT * FROM news').all() as NewsItem[];
  await new Promise(res => setTimeout(res, 2000))
  return news;
}
