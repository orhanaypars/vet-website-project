import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function VetsInfo() {
  return (
    <>
      <div className="mt-30 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-green-900 uppercase dark:text-white">
          Uzman Hekimlerimiz
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 px-6 py-12">
        {/* Vet 1 */}
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-xl font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
              Dr. Ahmet Yılmaz
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/veteriner-1.jpg"
                alt="Dr. Ahmet Yılmaz"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              <strong>Üniversite:</strong> İstanbul Üniversitesi
              <br />
              <strong>Uzmanlık:</strong> Küçük Hayvan Cerrahisi
            </CardDescription>
          </CardContent>
        </Card>

        {/* Vet 2 */}
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-xl font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
              Dr. Ayşe Demir
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/veteriner-2.jpg"
                alt="Dr. Ayşe Demir"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              <strong>Üniversite:</strong> Ankara Üniversitesi
              <br />
              <strong>Uzmanlık:</strong> Egzotik Hayvanlar
            </CardDescription>
          </CardContent>
        </Card>

        {/* Vet 3 */}
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-xl font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
              Dr. Mehmet Kaya
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/veteriner-3.jpg"
                alt="Dr. Mehmet Kaya"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              <strong>Üniversite:</strong> Ege Üniversitesi
              <br />
              <strong>Uzmanlık:</strong> İç Hastalıkları
            </CardDescription>
          </CardContent>
        </Card>

        {/* Vet 4 */}
        <Card className="w-full md:w-[350px] lg:w-[400px] text-center flex flex-col justify-center items-center shadow-lg p-6">
          <CardHeader className="flex flex-col items-center justify-center">
            <CardTitle className="text-xl font-bold text-green-700 dark:text-green-400 whitespace-nowrap">
              Dr. Zeynep Çelik
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-[200px] h-[200px]">
              <Image
                src="/veteriner-4.jpg"
                alt="Dr. Zeynep Çelik"
                width={200}
                height={200}
                className="rounded-full shadow-md object-cover w-full h-full"
              />
            </div>
            <CardDescription className="text-gray-700 dark:text-gray-300 text-base mt-4">
              <strong>Üniversite:</strong> Uludağ Üniversitesi
              <br />
              <strong>Uzmanlık:</strong> Hayvan Beslenmesi
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default VetsInfo;
