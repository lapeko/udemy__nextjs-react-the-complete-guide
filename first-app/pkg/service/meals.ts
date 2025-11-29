'use server'

import slugify from "slugify"
import xss from "xss"
import { join } from "path"
import { writeFile } from "fs/promises"
import { redirect } from "next/navigation"

import { Meal } from "../domain/entity"
import { saveMeal } from "../repo/meals"

export const shareMeal = async (formData: FormData) => {
  const title = formData.get('title') as string
  const meal: Meal = {
    title,
    slug: slugify(title, { lower: true }),
    summary: formData.get('summary') as string,
    instructions: xss(formData.get('instructions') as string),
    image: formData.get('image') as File,
    creator: formData.get('name') as string,
    creator_email: formData.get('email') as string,
  }

  const imageFile = meal.image
  const bytes = await imageFile.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const fileName = imageFile.name
  const path = join(process.cwd(), 'public', 'images', fileName)
  await writeFile(path, buffer)

  await saveMeal({
    ...meal,
    image: `/images/${fileName}`,
  })

  redirect("/meals")
}
