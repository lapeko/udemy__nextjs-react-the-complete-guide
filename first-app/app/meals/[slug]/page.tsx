import Link from "next/link";

async function MealPage({ params }: PageProps<"/meals/[slug]">) {
  const { slug } = await params;
  return (
    <main>
      <h1>Meal {slug}</h1>
      <Link href="/meals">Go to meals</Link>
    </main>
  );
}

export default MealPage;
