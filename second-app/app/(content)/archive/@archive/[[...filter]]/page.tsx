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

type Props = {
  params: Promise<{ filter?: string[] }>
}

export default async ({ params }: Props) => {
  const { filter } = await params;

  let news: FullNewsItem[] = [];
  let links: string[] = [];
  if (!filter) {
    news = await getNews();
    links = await getAvailableNewsYears();
  } else if (filter.length === 1) {
    news = await getNewsForYear(filter[0])
    links = getAvailableNewsMonths(filter[0]);
  } else if (filter.length === 2) {
    news = await getNewsForYearAndMonth(filter[0], filter[1])
  }

  const newsContent = news.length
    ? <NewsList news={news} />
    : <p>No news found for the selected period.</p>

  const prefix = filter?.length ? `/archive/${filter[0]}` : "/archive";

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(link => <li key={link}>
              <Link href={`${prefix}/${link}`}>{link}</Link>
            </li>)}
          </ul>
        </nav>
      </header>
      <h1>News Page</h1>
      {newsContent}
    </>
  )
}
