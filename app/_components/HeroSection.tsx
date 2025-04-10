import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 px-4 py-8 mt-15 lg:mt-0 bg-gradient-to-b from-green-100 via-blue-50 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Image */}
      <div className="w-full md:w-1/2 flex justify-center mx-10 max-h-[500px] max-w-[500px] md:max-h-[700px] md:max-w-[700px]">
        <Image
          src="/image-1.png"
          layout="responsive"
          width={1000}
          height={1400}
          alt="hero-image"
          className="rounded-full shadow-2xl p-5"
        />
      </div>

      {/* Hero Text */}
      <div className="flex flex-col md:gap-6 text-center md:text-left md:w-1/2 lg:text-center">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-400 md:text-4xl lg:text-6xl">
          Hayvan Dostlarınız İçin En İyi Bakım
        </h1>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm md:text-lg lg:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quos necessitatibus iste praesentium harum. Inventore quis autem
          voluptatibus incidunt blanditiis fugit, recusandae vero voluptates,
          eaque dicta animi laudantium, voluptate iusto.
        </p>
        <div className="mt-3">
          <Link href="/takemeeting">
            <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 lg:text-xl">
              Randevu Al
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
