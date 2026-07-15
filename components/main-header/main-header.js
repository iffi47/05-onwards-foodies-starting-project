import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavLink from "../nav-link/nav-link";

export default function MainHeader() {
 const pages = [
  {
   title: "Browse Meals",
   route: "/meals",
  },
  {
   title: "Community",
   route: "/community",
  },
 ];
 return (
  <>
   <MainHeaderBackground />
   <header className={classes.header}>
    <Link
     className={classes.logo}
     href="/">
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
        <NavLink href={page.route} title={page.title} />
       </li>
      ))}
     </ul>
    </nav>
   </header>
  </>
 );
}
