import { Meal } from "@/pkg/domain/entity"
import { FC } from "react"

import { MealItem } from "../meals-item"
import c from "./style.module.css"

type Props = { meals: Meal[] }

export const MealsGrid: FC<Props> = ({ meals }) => (
  <ul className={c.meals}>
    {meals.map(meal => <li key={meal.id}>
      <MealItem meal={meal} />
    </li>)}
  </ul>
)
