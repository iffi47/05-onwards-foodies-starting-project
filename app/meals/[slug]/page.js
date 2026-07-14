export default async function  MealPage({ params }) {

  const{ slug} = await params;
  return(
    <>
      <h1>Meal Page</h1>
      <h2>{slug}</h2>
    </>
  )
}