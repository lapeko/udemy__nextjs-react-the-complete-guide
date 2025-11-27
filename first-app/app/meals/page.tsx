import Link from "next/link";
import { MealsGrid } from "@/components/meals-grid";

import c from "./page.module.css"

export const MealsPage = () => {
  return (
    <>
      <header className={c.header}></header>
      <h1>Delicious meals, created <span className={c.highlight}>by you</span></h1>
      <p className={c.cta}>
        <Link href="/meals/share">Share your favorite Recipe</Link>
      </p>
      <main className={c.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}

export default MealsPage;
