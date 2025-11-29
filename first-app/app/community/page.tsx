import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community | NextLevel Food",
  description: "Join our food-loving community and share your favorite recipes.",
};

function CommunityPage() {
  return (
    <main>
      <h1>Community</h1>
      <Link href="/">Go home</Link>
    </main>
  );
}

export default CommunityPage;
