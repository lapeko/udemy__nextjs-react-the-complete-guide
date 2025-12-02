import Database from "better-sqlite3";
import { join } from "path";

import { FullNewsItem } from "../entity";

const db = new Database(join(process.cwd(), 'pkg', 'domain', 'repo', 'data.db'));

export async function getNews(): Promise<FullNewsItem[]> {
  const news = db.prepare('SELECT * FROM news').all();
  await new Promise(res => setTimeout(res, 2000))
  return news as FullNewsItem[];
}

export async function getNewsItem(slug: string): Promise<FullNewsItem> {
  const newsItem = db.prepare('SELECT * FROM news WHERE slug = ?').get(slug);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem as FullNewsItem;
}

export async function getLatestNews(): Promise<FullNewsItem[]> {
  const latestNews = db
    .prepare('SELECT * FROM news ORDER BY date DESC LIMIT 3')
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews as FullNewsItem[];
}

export async function getAvailableNewsYears(): Promise<string[]> {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as Array<{ year: string }>;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return years.map((year) => year.year);
}

export function getAvailableNewsMonths(year: string): string[] {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as Array<{ month: string }>;
  return months.map((month) => month.month);
}

export async function getNewsForYear(year: string): Promise<FullNewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as FullNewsItem[];
}

export async function getNewsForYearAndMonth(year: string, month: string): Promise<FullNewsItem[]> {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news as FullNewsItem[];
}
