import news from '@/app/mocks/news-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function NewsDetailPage(props: PageProps<'/news/[slug]'>) {
  const { slug } = await props.params;
  const item = news.find((item) => item.slug === slug);

  if (!item) notFound();

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </Link>
        <h1>{item?.title}</h1>
        <time dateTime={item.date}>{item.date}</time>
      </header>
      <p>{item.content}</p>
    </article>
  );
}
