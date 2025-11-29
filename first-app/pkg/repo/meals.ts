import { Meal } from '@/pkg/domain/entity'
import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'

const db = sql("db/meals.db")

export const getMeals = async () => {
  await new Promise(res => setTimeout(res, 2000))
  return db.prepare("SELECT * FROM meals").all() as Meal[]
}

export const getMeal = (slug: string): Meal =>
  db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;

export const saveMeal = (meal: Meal) => {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)

  return db.prepare(`
    INSERT INTO meals (slug, title, image, summary, instructions, creator, creator_email)
    VALUES (@slug, @title, @image, @summary, @instructions, @creator, @creator_email)
  `).run(meal)
}
