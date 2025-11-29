export type DBMeal = {
  title: string;
  slug: string;
  image: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export type FullDBMeal = DBMeal & {
  id: string;
}
