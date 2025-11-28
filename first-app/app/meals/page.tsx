import Link from "next/link";
import { MealsGrid } from "@/components/meals-grid";

import c from "./page.module.css"
import { getMeals } from "@/db/meals";
import { Suspense } from "react";

const Meals = async () => {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

export const MealsPage = async () => (
  <>
    <header className={c.header}>
      <h1>Delicious meals, created <span className={c.highlight}>by you</span></h1>
      <p className={c.cta}>
        <Link href="/meals/share">Share your favorite Recipe</Link>
      </p>
    </header>
    <main className={c.main}>
      <Suspense fallback={<p className={c.loading}>Fetching meals...</p>}>
        <Meals />
      </Suspense>
    </main>
  </>
)

export default MealsPage;
