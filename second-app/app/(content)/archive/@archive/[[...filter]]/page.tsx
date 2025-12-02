import NewsList from "@/app/components/news-list";
import {
  getAvailableNewsYears,
  getNewsForYear,
  getNews,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
} from "@/pkg/domain/repo/news";
import { FullNewsItem } from "@/pkg/domain/entity";
import Link from "next/link";
import { Suspense } from "react";

type DateProps = {
  year?: string;
  month?: string;
}

const Navigation = async ({ year, month }: DateProps) => {
  if (month) return;

  const prefix = year ? `/archive/${year}` : "/archive";
  const links = await (year ? getAvailableNewsMonths(year) : getAvailableNewsYears());

  return (
    <ul>
      {
        links.map(link => <li key={link}>
          <Link href={`${prefix}/${link}`}>{link}</Link>
        </li>)
      }
    </ul>
  )
}

const NewsContent = async ({ year, month }: DateProps) => {
  let news: FullNewsItem[];
  if (!year) {
    news = await getNews();
  } else if (!month) {
    news = await getNewsForYear(year)
  } else {
    news = await getNewsForYearAndMonth(year, month)
  }

  return news.length
    ? <NewsList news={news} />
    : <p>No news found for the selected period.</p>
}

type Props = {
  params: Promise<{ filter?: string[] }>
}

export default async ({ params }: Props) => {
  const { filter } = await params;
  const [year, month] = filter || [];

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            <Suspense fallback={<p>Navigation updating...</p>} >
              <Navigation year={year} month={month} />
            </Suspense>
          </ul>
        </nav>
      </header>
      <h1>News Page</h1>
      <Suspense fallback={<p>Loading news...</p>}>
        <NewsContent year={year} month={month} />
      </Suspense>
    </>
  )
}
