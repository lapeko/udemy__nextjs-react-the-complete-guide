import { Meal } from "../domain/entity";
import { ShareMealState } from "./meals";

export const validText = (text: string): boolean => text.trim().length > 0;
export const validImage = (image: File): boolean => image.size > 0;
export const validEmail = (email: string): boolean => {
  const index = email.indexOf("@")
  return index > 0 && index < email.length - 1
}

export const validMeal = ({ title, slug, image, summary, instructions, creator, creator_email }: Meal): ShareMealState => {
  if (!validText(title)) {
    return { message: 'Title is required.' }
  }
  if (!validText(slug)) {
    return { message: 'Slug is required.' }
  }
  if (!validImage(image)) {
    return { message: 'Image is required.' }
  }
  if (!validText(summary)) {
    return { message: 'Summary is required.' }
  }
  if (!validText(instructions)) {
    return { message: 'Instructions are required.' }
  }
  if (!validText(creator)) {
    return { message: 'Creator name is required.' }
  }
  if (!validEmail(creator_email)) {
    return { message: 'Invalid email address.' }
  }
  return { message: null }
}
