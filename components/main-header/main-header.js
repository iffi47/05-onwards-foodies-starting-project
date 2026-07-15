import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";

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
    <MainHeaderBackground/>
   <header className={classes.header}>
    <Link className={classes.logo} href="/">
     <Image
      src={logoImg}
      alt="logo-img"
      priority
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
