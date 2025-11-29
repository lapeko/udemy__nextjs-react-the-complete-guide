import { FC } from "react"
import { FullDBMeal } from "@/pkg/repo/entity"

import { MealItem } from "../meals-item"
import c from "./style.module.css"

type Props = { meals: FullDBMeal[] }

export const MealsGrid: FC<Props> = ({ meals }) => (
  <ul className={c.meals}>
    {meals.map(meal => <li key={meal.id}>
      <MealItem meal={meal} />
    </li>)}
  </ul>
)
