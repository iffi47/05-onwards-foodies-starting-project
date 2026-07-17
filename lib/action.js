"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

function isInvalidText(text) {
 return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
 "use server";
 const meal = {
  title: formData.get("title"),
  image: formData.get("image"),
  summary: formData.get("summary"),
  instructions: formData.get("instructions"),
  creator: formData.get("name"),
  creator_email: formData.get("email"),
 };
 if (
  isInvalidText(meal.title) ||
  isInvalidText(meal.summary) ||
  isInvalidText(meal.creator) ||
  isInvalidText(meal.creator_email) ||
  isInvalidText(meal.instructions) ||
  !meal.image ||
  meal.image.size === 0
 ) {
  return {
   message: "Error Creating new receipe!",
  };
 }
 await saveMeal(meal);
 redirect("/meals");
}