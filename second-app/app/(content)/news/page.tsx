import NewsList from '@/app/components/news-list';
import { NewsItem } from "@/pkg/domain/entity"

export default async function NewsPage() {
  const news = await fetch("http://localhost:8080/news")
    .then(res => res.json() as Promise<NewsItem[]>)

  return (
    <div>
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
