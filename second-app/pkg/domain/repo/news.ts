import Database from "better-sqlite3";
import { join } from "path";
import { NewsItem } from "../entity";

const db = new Database(join(process.cwd(), 'pkg', 'domain', 'repo', 'data.db'));

export const getNews = () => db.prepare('SELECT * FROM news').all() as NewsItem[];
