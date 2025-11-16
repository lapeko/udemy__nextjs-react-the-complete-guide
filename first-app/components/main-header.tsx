import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";

import c from "./main-header.module.css";

const MainHeader = () => (
  <header className={c.header}>
    <Link className={c.logo} href="/">
      <Image src={logo} alt="a plate with food" priority />
      NextLevel food
    </Link>
    <nav className={c.nav}>
      <ul>
        <li>
          <Link href="/meals">Browse meals</Link>
        </li>
        <li>
          <Link href="/community">Foodies Community</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainHeader;
