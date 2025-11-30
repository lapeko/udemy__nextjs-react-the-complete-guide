import Link from 'next/link';
import Image from 'next/image';
import news from '../mocks/news';

export default function NewsPage() {
  return (
    <div>
      <h1>News</h1>
      <ul className='news-list'>
        {news.map((item) => (
          <li key={item.id}>
            <Link href={`/news/${item.slug}`}>
              <Image src={`/images/news/${item.image}`} alt={item.title} width={300} height={200} />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
