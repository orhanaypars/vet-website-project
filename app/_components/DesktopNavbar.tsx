import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { ModeToggle } from "@/components/ModeToggle";

const navLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  { label: "İletişim", href: "/contact" },
  { label: "Randevu Al", href: "/takemeeting" },
  { label: "Konum", href: "/location" },
];

function DesktopNavbar() {
  return (
    <div className="flex justify-between items-center w-full mx-auto bg-gradient-to-r from-green-500 via-blue-300 to-green-500 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 shadow-lg">
      {/* Logo */}
      <div className="flex-shrink-0 pl-15">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={50}
          className="rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-15 pr-20">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-lg font-medium text-black dark:text-white hover:opacity-70 transition-opacity"
          >
            {link.label}
          </Link>
        ))}
        <ModeToggle />
      </div>
    </div>
  );
}

export default DesktopNavbar;
