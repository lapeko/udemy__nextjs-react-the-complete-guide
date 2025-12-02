import NewsList from "@/app/components/news-list"
import { getLatestNews } from "@/app/mocks/news"

export default () => {
  const latestNews = getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}
