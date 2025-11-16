import Link from "next/link";

async function SharePage() {
  return (
    <main>
      <h1>Share meal</h1>
      <Link href="/meals">Go to meals</Link>
    </main>
  );
}

export default SharePage;
