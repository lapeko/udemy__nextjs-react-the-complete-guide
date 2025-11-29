import Image from "next/image";
import { Metadata } from "next";

import c from "./page.module.css"
import { getMeal } from "@/pkg/repo/meals";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: PageProps<"/meals/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const meal = getMeal(slug);

  if (!meal) {
    return {
      title: "Meal Not Found | NextLevel Food",
    };
  }

  return {
    title: `${meal.title} | NextLevel Food`,
    description: meal.summary,
  };
}

async function MealPage({ params }: PageProps<"/meals/[slug]">) {
  const { slug } = await params;
  const meal = getMeal(slug)

  if (!meal) {
    notFound()
  }

  meal.instructions = meal.instructions.replaceAll("\n", "<br/>")

  return (
    <>
      <header className={c.header}>
        <div className={c.image}>
          <Image src={meal.image} fill alt={meal.title} />
        </div>
        <div className={c.headerText}>
          <h1>{meal.title}</h1>
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
