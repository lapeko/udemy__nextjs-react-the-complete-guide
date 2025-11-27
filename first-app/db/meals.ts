import { Meal } from '@/app/domain/entity'
import sql from 'better-sqlite3'

const db = sql("db/meals.db")

export const getMeals = () => db.prepare("SELECT * FROM meals").all() as Meal[]
