import Image from "next/image";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 px-6 py-12 mt-20 lg:mt-0">
      <div className="container mx-auto max-w-4xl">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 dark:text-green-400">
            Hakkımızda
          </h1>
          <p className="mt-4 text-gray-700 dark:text-gray-300">
            Hayvan dostlarınızın sağlığı ve mutluluğu için buradayız.
            Kliniğimiz, modern ekipmanlarımız ve uzman ekibimizle en iyi hizmeti
            sunmayı hedefliyor.
          </p>
        </div>

        {/* Misyon ve Vizyon */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
            Misyonumuz
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hayvan dostlarımızın sağlığını ve refahını en üst düzeyde tutmayı
            amaçlıyoruz. Sevgi ve özveriyle, onların yaşam kalitesini artırmak
            için çalışıyoruz.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
            Vizyonumuz
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Hayvan sağlığı alanında lider bir klinik olmak ve toplumda hayvan
            sevgisini artırmak için çalışıyoruz. Teknolojiyi ve yenilikçi
            yöntemleri kullanarak, hayvan dostlarımızın yaşam kalitesini
            yükseltmeyi hedefliyoruz.
          </p>
        </div>

        {/* Hizmetlerimiz */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
            Hizmetlerimiz
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Genel sağlık muayenesi</li>
            <li>Aşı uygulamaları</li>
            <li>Laboratuvar testleri</li>
            <li>Cerrahi müdahaleler</li>
            <li>Diş sağlığı hizmetleri</li>
            <li>Beslenme ve diyet danışmanlığı</li>
            <li>Pet kuaför hizmetleri</li>
          </ul>
        </div>

        {/* Ekibimiz */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
            Ekibimiz
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Kliniğimizde, alanında uzman veteriner hekimler ve hayvan sağlığı
            teknikerlerinden oluşan bir ekip bulunmaktadır. Her biri, hayvan
            dostlarımızın sağlığı ve mutluluğu için özveriyle çalışmaktadır.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Ekip Üyesi 1 */}
            <div className="flex items-center space-x-4">
              <Image
                src="/veteriner-4.jpg"
                width={106}
                height={106}
                alt="Dr. Ahmet Yılmaz"
                className="rounded-lg object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-400">
                  Dr. Ahmet Yılmaz
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Küçük Hayvan Cerrahisi Uzmanı
                </p>
              </div>
            </div>
            {/* Ekip Üyesi 2 */}
            <div className="flex items-center space-x-4">
              <Image
                src="/veteriner-2.jpg"
                width={106}
                height={106}
                alt="Dr. Ayşe Demir"
                className="rounded-lg object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-400">
                  Dr. Ayşe Demir
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Egzotik Hayvanlar Uzmanı
                </p>
              </div>
            </div>
            {/* Ekip Üyesi 3 */}
            <div className="flex items-center space-x-4">
              <Image
                src="/veteriner-3.jpg"
                width={106}
                height={106}
                alt="Dr. Mehmet Kaya"
                className="rounded-lg object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-400">
                  Dr. Simay Pazan
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Acil Durum ve Travma Uzmanı
                </p>
              </div>
            </div>
            {/* Ekip Üyesi 4 */}
            <div className="flex items-center space-x-4">
              <Image
                src="/veteriner-1.jpg"
                width={106}
                height={106}
                alt="Dr. Elif Çelik"
                className="rounded-lg object-cover shadow-md"
              />
              <div>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-400">
                  Dr. Elif Çelik
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Beslenme ve Diyet Uzmanı
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* İletişim */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">
            Bize Ulaşın
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Daha fazla bilgi almak veya randevu oluşturmak için bizimle
            iletişime geçebilirsiniz.
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-2 bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            İletişim Sayfası
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
