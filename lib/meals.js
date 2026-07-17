import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs/promises";

const db = sql("meals.db");

export async function getMeals() {
 await new Promise((resolve) => setTimeout(resolve, 2000));
 //  throw new Error("Failed to fetch meals");
 return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
 //  await Promise((resolve) => setTimeout(resolve, 2000));
 return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
 const slug = slugify(meal.title, { lower: true });
 meal.slug = slug;
 meal.instructions = xss(meal.instructions);

 const extension = meal.image.name.split(".").pop();
 const fileName = `${slug}.${extension}`;
 const bufferedImage = Buffer.from(await meal.image.arrayBuffer());
 await fs.writeFile(`public/images/${fileName}`, bufferedImage);
 meal.image = `/images/${fileName}`;

 db
  .prepare(
   `
   INSERT INTO meals
   (title, summary, instructions, creator, creator_email, image, slug)
   VALUES
   (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
  `,
  )
  .run(meal);
}
