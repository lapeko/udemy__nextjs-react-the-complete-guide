import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <div>
        <Link href="blog/post-1">post-1</Link>
      </div>
      <div>
        <Link href="blog/post-2">post-2</Link>
      </div>
    </main>
  );
}
