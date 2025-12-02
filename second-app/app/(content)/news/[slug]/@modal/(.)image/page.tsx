import { notFound } from "next/navigation";
import { getNewsItem } from "@/pkg/domain/repo/news";

import ModalBackdrop from "./modal-backdrop";

export default async ({ params }: PageProps<"/news/[slug]/image">) => {
  const { slug } = await params;
  const item = await getNewsItem(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${item.image}`} alt={item.title} />
        </div>
      </dialog>
    </>
  )
}