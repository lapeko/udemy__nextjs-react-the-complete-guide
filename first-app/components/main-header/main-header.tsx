import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";

import MainHeaderBackgroud from "./main-header-background";
import c from "./main-header.module.css";
import { NavLink } from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackgroud />
      <header className={c.header}>
        <Link className={c.logo} href="/">
          <Image src={logo} alt="a plate with food" priority />
          NextLevel food
        </Link>
        <nav className={c.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
