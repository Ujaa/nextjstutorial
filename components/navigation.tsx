"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>Home {path === "/" && "🏠"}</Link>
        </li>
        <li>
          <Link href={"/about-us"}>
            About Us {path === "/about-us" && "🏠"}
          </Link>
        </li>
        <li>
          <Link href={"/company/people/:id "}>
            people {path === "/company/people/:id" && "🏠"}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
