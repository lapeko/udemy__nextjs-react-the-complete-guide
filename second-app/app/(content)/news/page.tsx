'use client'

import NewsList from '@/app/components/news-list';
import { ReactNode, useEffect, useState } from 'react';
import { NewsItem } from "@/pkg/domain/entity"

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setPending(true);

    fetch("http://localhost:8080/news")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP request error. ${res.status}: ${res.statusText}`);
        return res.json()
      })
      .then((news: NewsItem[]) => setNews(news))
      .catch(e => setError(e instanceof Error ? e.message : String(e)))
      .finally(() => setPending(false))
  }, []);

  let content: ReactNode;

  if (error) content = <p>{error}</p>
  else if (pending) content = <p>Pending data...</p>
  else content = <NewsList news={news} />

  return (
    <div>
      <h1>News</h1>
      {content}
    </div>
  );
}
