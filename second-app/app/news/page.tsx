import Link from 'next/link';
import { news } from './data';

export default function NewsPage() {
  return (
    <div>
      <h1>News</h1>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.id}`}>{item.title}</Link>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

