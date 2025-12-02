export type NewsItem = {
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}


export type FullNewsItem = NewsItem & {
  id: string;
}
