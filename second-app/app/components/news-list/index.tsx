import Link from 'next/link';
import { FullNewsItem } from '@/pkg/domain/entity';

type Props = { news: FullNewsItem[] };

export default function NewsList({ news }: Props) {
  return (
    <ul className="news-list">
      {news.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.slug}`}>
            <img src={`/images/news/${item.image}`} alt={item.title} />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
