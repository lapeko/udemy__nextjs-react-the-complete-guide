import Image from "next/image";

import c from "./page.module.css"
import { getMeal } from "@/db/meals";

async function MealPage({ params }: PageProps<"/meals/[slug]">) {
  const { slug } = await params;
  const meal = getMeal(slug)

  meal.instructions = meal.instructions.replaceAll("\n", "<br/>")

  return (
    <>
      <header className={c.header}>
        <div className={c.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={c.headerText}>
          <h1>Title</h1>
          <p className={c.creator}>
            by <a href={meal.creator_email}>{meal.creator}</a>
          </p>
          <p className={c.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={c.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions }}></p>
      </main>
    </>
  );
}

export default MealPage;
