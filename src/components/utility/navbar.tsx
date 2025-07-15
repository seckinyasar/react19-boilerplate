//#region //? References
/**
 * @file Navbar Component
 *
 * @section Colors & places they are used
 * - `secondary/15` => navbar background
 * - `black/40` => page icon container background
 * - `black` => page icon container hover background
 * - `active-svg` => icon stroke (via ThemeSwitcher)
 *
 * @notes
 * - Integrates `ThemeSwitcher` with `navbar` prop for compact styling.
 */
//#endregion

import { Home, LucideComponent } from "lucide-react";
import Link from "next/link";
import ThemeSwitcher from "../themeSwitcher";

const pages = [
  {
    page: "Home",
    href: "/",
    icon: Home,
  },
  {
    page: "forms",
    href: "/reactflow",
    icon: LucideComponent,
  },
];

export default function Navbar() {
  return (
    <div className="fixed  bottom-6 left-1/2 -translate-x-1/2   ">
      <div className="bg-secondary/15 flex items-center justify-between w-fit px-2 h-14 rounded-full space-x-1">
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.href}
            className="bg-black/40 rounded-full size-12 flex items-center justify-center hover:bg-black hover:scale-110"
          >
            <page.icon className="size-5 " />
          </Link>
        ))}
        <ThemeSwitcher navbar />
      </div>
    </div>
  );
}
