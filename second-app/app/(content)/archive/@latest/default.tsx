import NewsList from "@/app/components/news-list"
import { getLatestNews } from "@/pkg/domain/repo/news"

export default async () => {
  const latestNews = await getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}
