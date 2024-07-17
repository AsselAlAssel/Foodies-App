import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainHeaderBG from "./main-header-bg";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBG />

      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logoImg} alt={"logo image"} priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Comunity</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
