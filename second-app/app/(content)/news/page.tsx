import NewsList from '@/app/components/news-list';
import { getNews } from '@/pkg/domain/repo/news';

export default function NewsPage() {
  const news = getNews()

  return (
    <div>
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
