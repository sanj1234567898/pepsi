import React from "react";
import Link from "next/link";
import { navLink } from "@/components/elements";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export const Navbar = () => {
  const [open, isOpen] = React.useState(false);

  const openNavbar = () => {
    isOpen(!open);
  };

  return (
    <header className="header">
      <img src={"/images/logo.png"} alt={"logo"} />
      <nav className={`nav ${open ? "responsive_nav" : ""}`}>
        <ul className="nav__menu">
          {navLink.map((item, id) => (
            <li className="menu__item" key={id}>
              <Link href={`${item.link}`}>
                <p className="item__text">{item.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <button className="btn">BUY PRODUCT</button>
      </nav>
      <button className="nav-btn" onClick={openNavbar}>
        {open ? (
          <RxCross1
            style={{
              color: "white",
              width: 25,
              height: 25,
            }}
          />
        ) : (
          <RxHamburgerMenu
            style={{
              color: "white",
              width: 25,
              height: 25,
            }}
          />
        )}
      </button>
    </header>
  );
};
