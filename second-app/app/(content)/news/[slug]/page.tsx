import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getNewsItem } from '@/pkg/domain/repo/news';

export default async function NewsDetailPage(props: PageProps<'/news/[slug]'>) {
  const { slug } = await props.params;
  const item = await getNewsItem(slug);

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
