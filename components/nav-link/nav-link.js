'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({href, title}) {
  const pathname = usePathname()
  return(
    <>
      <Link
         href={href}
         className={
          pathname?.startsWith(href) ? classes.active : undefined
         }
         aria-current={pathname?.startsWith(href) ? "page" : undefined}>
         {title}
        </Link>
    </>
  )
}