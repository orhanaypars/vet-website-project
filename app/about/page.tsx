// Dosyanın en başına ekleyin (Image import'undan önce veya sonra olabilir)
import type { Metadata } from "next";

import Image from "next/image";

// ===> HAKKIMIZDA SAYFASI İÇİN METADATA OBJESİ <===
export const metadata: Metadata = {
  // Hakkımızda Sayfasına Özel Başlık: layout.tsx'teki template'i kullanır.
  title: "Hakkımızda - Ekibimiz ve Değerlerimiz", // Sonuç: "Hakkımızda - Ekibimiz ve Değerlerimiz | Can Dostlar Veteriner Kliniği"

  // Hakkımızda Sayfasına Özel Açıklama: Sayfa içeriğini özetler, ekibi ve konumu vurgular.
  description:
    "Zonguldak Can Dostlar Veteriner Kliniği hakkında daha fazla bilgi edinin. Misyonumuz, vizyonumuz ve uzman veteriner hekim ekibimizle (Dr. Ahmet Yılmaz, Dr. Ayşe Demir, Dr. Simay Pazan, Dr. Elif Çelik) tanışın.",

  // Hakkımızda Sayfasının Canonical URL'si
  alternates: {
    canonical: "/hakkimizda", // URL yapınız farklıysa (örn: /about) bunu güncelleyin
  },

  // Hakkımızda Sayfasına Özel Anahtar Kelimeler: Ekip, değerler ve lokasyon odaklı.
  keywords: [
    "Can Dostlar Veteriner ekibi",
    "Zonguldak veteriner hekimleri",
    "hayvan kliniği misyonu",
    "veteriner klinik vizyonu",
    "uzman veteriner Zonguldak",
    "Dr. Ahmet Yılmaz",
    "Dr. Ayşe Demir",
    "Dr. Simay Pazan",
    "Dr. Elif Çelik",
    "veteriner kliniği hakkında",
    "güvenilir veteriner",
  ],

  // Hakkımızda Sayfası için Open Graph Bilgileri
  openGraph: {
    title: "Hakkımızda - Can Dostlar Veteriner Kliniği Ekibi ve Misyonu", // OG için biraz daha detaylı başlık
    description:
      "Zonguldak Can Dostlar Veteriner Kliniği'nin misyonunu, vizyonunu ve deneyimli ekibini yakından tanıyın.",
    url: "/hakkimizda", // Bu sayfanın URL'si
    images: [
      {
        // DİKKAT: Buradaki 106x106px resimler OG için çok küçük!
        // Sosyal medyada iyi görünmesi için en az 1200x630px boyutunda
        // bir klinik veya ekip fotoğrafı kullanmanız ŞİDDETLE önerilir.
        // Geçici olarak bir ekip üyesinin resmini kullanıyoruz:
        url: "/veteriner-4.jpg", // VEYA '/klinik-ekip-og.jpg' gibi daha uygun bir resim yolu
        width: 106, // Önerilmez - Çok küçük boyut
        height: 106, // Önerilmez - Çok küçük boyut
        alt: "Can Dostlar Veteriner Kliniği Ekibi",
      },
      // Örnek: Daha iyi boyutlu bir resim ekleme:
      // {
      //   url: '/klinik-hakkimizda-1200x630.jpg',
      //   width: 1200,
      //   height: 630,
      //   alt: 'Can Dostlar Veteriner Kliniği Hakkında',
      // }
    ],
    // siteName, locale, type layout.tsx'ten miras alınır.
  },

  // Hakkımızda Sayfası için Twitter Kart Bilgileri
  twitter: {
    // Küçük resim kullanıldığı için 'summary' kart tipi daha uygun olabilir.
    // Büyük ve uygun bir resim (1200x630 gibi) kullanırsanız 'summary_large_image' yapabilirsiniz.
    card: "summary",
    title: "Hakkımızda | Can Dostlar Veteriner Kliniği (Zonguldak)",
    description:
      "Kliniğimizin misyonunu, vizyonunu ve Zonguldak'taki uzman veteriner ekibimizi tanıyın.",
    images: ["/veteriner-4.jpg"], // OG ile aynı küçük resim kullanılıyor. Daha iyisi önerilir.
  },
  // robots, authors gibi diğer etiketler layout.tsx'ten miras alınır.
};

// ===> MEVCUT SAYFA KOMPONENTİNİZ <===
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
                alt="Dr. Ahmet Yılmaz - Küçük Hayvan Cerrahisi Uzmanı" // Alt metne uzmanlık ekledim
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
                alt="Dr. Ayşe Demir - Egzotik Hayvanlar Uzmanı" // Alt metne uzmanlık ekledim
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
                alt="Dr. Simay Pazan - Acil Durum ve Travma Uzmanı" // Alt metne uzmanlık ekledim
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
                alt="Dr. Elif Çelik - Beslenme ve Diyet Uzmanı" // Alt metne uzmanlık ekledim
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
          {/* Link Next.js <Link> bileşeni ile değiştirilebilir */}
          <a
            href="/contact" // veya /iletisim
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
