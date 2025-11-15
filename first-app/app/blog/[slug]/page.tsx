const PostPage = async ({ params }: PageProps<"/blog/[slug]">) => {
  const { slug } = await params;
  return (
    <main>
      <p>{slug}</p>
    </main>
  );
};

export default PostPage;
