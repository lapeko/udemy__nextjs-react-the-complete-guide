import Link from 'next/link';
import { news } from '../data';

export default async function NewsDetailPage(props: PageProps<'/news/[id]'>) {
  const { id } = await props.params;

  const newsItem = news.find((item) => item.id === id);

  if (!newsItem) {
    return (
      <div>
        <h1>News Article Not Found</h1>
        <Link href="/news">Back to News</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.description}</p>
      <Link href="/news">Back to News</Link>
    </div>
  );
}
