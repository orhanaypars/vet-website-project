import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Features() {
  return (
    <>
      <div className="mt-30 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-green-900 uppercase dark:text-white">
          Hizmetlerimiz
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 px-6 py-12">
        {/* Card 1 */}
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-400 text-center">
              Aşı
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/image-2.png"
                alt="Aşı"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-2">
              Hayvanlarınızın sağlığını korumak için düzenli aşı uygulamaları
              yapılır.Uzman veterinerlerimizle güvenli bir hizmet sunuyoruz.
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-2">
            <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
              Bilgi Al
            </Button>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-400 text-center">
              Tedavi
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/image-3.png"
                alt="Tedavi"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              Hayvanlarınızın ihtiyaç duyduğu tedavi hizmetlerini en iyi şekilde
              sunuyoruz. Sağlıkları bizim önceliğimizdir.
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
              Bilgi Al
            </Button>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-400 text-center">
              Kontrol
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/image-1.png"
                alt="Kontrol"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              Düzenli kontrollerle hayvanlarınızın sağlığını takip ediyoruz.
              Erken teşhis ve önleyici tedavi hizmetleri sunuyoruz.
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
              Bilgi Al
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-400 text-center">
              Tıraş
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/image-8.jpg"
                alt="Kontrol"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              Hayvanlarınızın sağlığını takip ediyoruz. Gerekli durumlarda tıraş
              işlemi uyguluyoruz.
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
              Bilgi Al
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-400 text-center">
              Kontrol
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/image-5.jpg"
                alt="Kontrol"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              Düzenli kontrollerle hayvanlarınızın sağlığını takip ediyoruz.
              Erken sahiplendirme hizmeti sunuyoruz.
            </CardDescription>
          </CardContent>
          <CardFooter className="mt-4">
            <Button className="bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300">
              Bilgi Al
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
