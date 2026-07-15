import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

export default function MainHeader() {
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
  <>
   <header className={classes.header}>
    <Link className={classes.logo} href="/">
     <img
      src={logoImg.src}
      alt="logo-img"
     />
     Next Level Food
    </Link>
    <nav className={classes.nav}>
     <ul>
      {pages.map((page) => (
       <li key={page.title}>
        <Link href={page.route}>{page.title}</Link>
       </li>
      ))}
     </ul>
    </nav>
   </header>
  </>
 );
}
