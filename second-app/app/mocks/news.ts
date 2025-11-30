import news from '@/app/mocks/news-data';

export function getAllNews() {
  return news;
}

export function getLatestNews() {
  return news.slice(0, 3);
}

export function getAvailableNewsYears() {
  return news.reduce((years, news) => {
    const year = new Date(news.date).getFullYear();
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, [] as number[]).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year: number) {
  return news.reduce((months, news) => {
    const newsYear = new Date(news.date).getFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, [] as number[]).sort((a, b) => b - a);
}

export function getNewsForYear(year: string) {
  return news.filter(news => new Date(news.date).getFullYear() === +year);
}

export function getNewsForYearAndMonth(year: number, month: number) {
  return news.filter((news) => {
    const newsYear = new Date(news.date).getFullYear();
    const newsMonth = new Date(news.date).getMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
