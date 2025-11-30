import NewsList from "@/app/components/news-list";
import { getNewsForYear } from "@/app/mocks/news";

export default async ({ params }: PageProps<'/archive/[year]'>) => {
  const { year } = await params;
  const news = getNewsForYear(year)

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  )
}
