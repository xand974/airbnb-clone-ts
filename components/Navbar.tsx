import React from "react";
import style from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Language, Menu } from "@mui/icons-material";

export default function Navbar() {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.navTitle}>
          <Link href="/">
            <Image src="/img/airbnb-logo.png" layout="fill" />
          </Link>
        </div>
        <ul className={style.navLinks}>
          <Link href="#">
            <li className={style.navLink}>Hébergements</li>
          </Link>
          <Link href="#">
            <li className={style.navLink}>Expériences</li>
          </Link>
          <Link href="#">
            <li className={style.navLink}>Expériences en ligne</li>
          </Link>
        </ul>
        <div className={style.navRight}>
          <Link href="#">
            <span>Devenez hôte</span>
          </Link>

          <button className={style.navBtn}>
            <Language className={style.langIcon} />
          </button>
          <div className={style.profile}>
            <Menu className={style.menuIcon} />
            <Image src="/img/profile-pic.png" layout="fill" />
          </div>
        </div>
      </div>
      <div className={style.bottom}></div>
    </div>
  );
}
