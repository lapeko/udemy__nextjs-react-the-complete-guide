import { notFound } from "next/navigation";
import { getNewsItem } from "@/pkg/domain/repo/news";

export default async ({ params }: PageProps<"/news/[slug]/image">) => {
  const { slug } = await params;
  const item = await getNewsItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${item.image}`} alt={item.title} />
    </div>
  )
}