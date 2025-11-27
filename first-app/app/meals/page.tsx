import Link from "next/link";
import { MealsGrid } from "@/components/meals-grid";

import c from "./page.module.css"
import { getMeals } from "@/db/meals";

export const MealsPage = () => {
  const meals = getMeals()

  return (
    <>
      <header className={c.header}>
        <h1>Delicious meals, created <span className={c.highlight}>by you</span></h1>
        <p className={c.cta}>
          <Link href="/meals/share">Share your favorite Recipe</Link>
        </p>
      </header>
      <main className={c.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

export default MealsPage;
