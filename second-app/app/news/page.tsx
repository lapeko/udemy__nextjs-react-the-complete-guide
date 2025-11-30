import news from '../mocks/news-data';
import NewsList from '../components/news-list';

export default function NewsPage() {
  return (
    <div>
      <h1>News</h1>
      <NewsList news={news} />
    </div>
  );
}
