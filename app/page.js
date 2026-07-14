import Link from "next/link";

export default function Home() {
 const pages = [
  {
   title: "Meals",
   route: "/meals",
  },
  {
   title: "Meals Share",
   route: "/meals/share",
  },
  {
   title: "Community",
   route: "/community",
  },
 ];

 return (
  <main>
   <h1 style={{ color: "white", textAlign: "center" }}>Time to get started!</h1>
   {pages.map((page) => (
    <p key={page.title}>
     <Link href={page.route}>{page.title}</Link>
    </p>
   ))}
  </main>
 );
}
