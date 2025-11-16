import Link from "next/link";

async function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <div>
        <Link href="/meals/share">Share meal</Link>
      </div>
      <div>
        <Link href="/meals/slug">Meal [slug]</Link>
      </div>
      <Link href="/">Go home</Link>
    </main>
  );
}

export default MealsPage;
