'use client'

import news from "@/app/mocks/news-data";
import { notFound, useRouter } from "next/navigation";

export default async ({ params }: PageProps<"/news/[slug]/image">) => {
  const router = useRouter();
  const { slug } = await params;
  const item = news.find(n => n.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
    </>
  )
}