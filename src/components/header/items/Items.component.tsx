import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { injectClassNames } from "utils/css";
import styles from "./Items.module.scss";

const { items, active } = styles;

interface Ilinks {
  name: string;
  url: string;
  alias: string[];
}

const links: Ilinks[] = [
  { name: "Home", url: "/", alias: [] },
  { name: "Plan", url: "/plan", alias: [] },
  //{ name: "Pages", url: "/pages", alias: ["/[page]"] },
  { name: "Profile", url: "/profile", alias: [] },
];

export default function Items(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <ul className={items}>
      {links.map(({ name, url, alias }) => (
        <li
          key={name}
          className={injectClassNames([
            active,
            pathname === url || alias.includes(pathname),
          ])}
        >
          <Link href={url}>{name}</Link>
        </li>
      ))}
    </ul>
  );
}
