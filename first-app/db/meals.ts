import { Meal } from '@/app/domain/entity'
import sql from 'better-sqlite3'

const db = sql("db/meals.db")

export const getMeals = async () => {
  await new Promise(res => setTimeout(res, 2000))
  return db.prepare("SELECT * FROM meals").all() as Meal[]
}

export const getMeal = (slug: string): Meal =>
  db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as Meal;
