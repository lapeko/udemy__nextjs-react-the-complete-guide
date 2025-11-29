import sql from 'better-sqlite3'
import { DBMeal, FullDBMeal } from './entity'

const db = sql("db/meals.db")

export const getMeals = async () => {
  await new Promise(res => setTimeout(res, 2000))
  return db.prepare("SELECT * FROM meals").all() as FullDBMeal[]
}

export const getMeal = (slug: string): FullDBMeal =>
  db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as FullDBMeal;

export const saveMeal = async (meal: DBMeal) => {
  return db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  `).run(meal)
}
