import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/about" },
  { label: "İletişim", href: "/contact" },
  { label: "Randevu Al", href: "/appointment" },
  { label: "Konum", href: "/location" },
];

function MobileNavbar() {
  return (
    <div className="shadow-lg fixed top-0 left-0 w-full z-50 px-4 bg-gradient-to-r from-green-400 via-blue-300 to-green-500">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Veteriner Logo"
            width={80}
            height={30}
            className="cursor-pointer transition-transform duration-300 rounded-full hover:scale-105"
          />
        </Link>

        {/* Mode Toggle */}
        <div className="flex flex-row gap-4 items-center">
          <ModeToggle />

          {/* Hamburger Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="focus:outline-none focus:ring-2 rounded-md transition-transform duration-300 hover:scale-110"
                aria-label="Open Menu"
              >
                <GiHamburgerMenu
                  size={35}
                  className="text-cyan-700 dark:text-cyan-300"
                />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 shadow-xl bg-gradient-to-t from-blue-50 via-blue-100 to-green-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
            >
              {/* Header */}
              <SheetHeader>
                <SheetTitle className="text-sm font-bold text-gray-700 dark:text-gray-300">
                  Menü
                </SheetTitle>
              </SheetHeader>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 mt-6 px-3 py-10 space-y-4 text-gray-700 dark:text-gray-300 text-xl font-semibold">
                {navLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="block transition-colors duration-300 hover:text-green-600 dark:hover:text-green-400"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Logo */}
              <div className="flex justify-center">
                <Image
                  src="/logo.png"
                  width={120}
                  height={50}
                  alt="sheet-logo"
                  className="rounded-full"
                />
              </div>

              {/* Close Button */}
              <SheetClose asChild>
                <button className="mt-6 font-bold py-2 px-4 rounded-xl w-full bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white transition-colors duration-300">
                  Kapat
                </button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
