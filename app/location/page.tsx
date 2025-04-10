// app/location/page.tsx (veya /konum/page.tsx, /ulasim/page.tsx)

// 1. Metadata tipini import edin
import type { Metadata } from "next";

// 2. Interaktif olabilecek konum/harita bileşenini import edin
import Location from "../_components/Location"; // Bu bileşen "use client" kullanabilir

// ===> KONUM SAYFASI İÇİN METADATA OBJESİ <===
// DİKKAT: Köşeli parantez [...] içindeki yer tutucuları kliniğinizin
// gerçek adresi ve bilgileriyle doldurmanız GEREKİR!
export const metadata: Metadata = {
  // Konum Sayfasına Özel Başlık (layout template'ini kullanır)
  title: "Konum ve Ulaşım Bilgileri", // Sonuç: "Konum ve Ulaşım Bilgileri | Can Dostlar Veteriner Kliniği"

  // Konum Sayfasına Özel Açıklama (Adresi Ekleyin!)
  description:
    "Zonguldak Can Dostlar Veteriner Kliniği'nin adresini ve konumunu bulun. Adresimiz: [Tam Adres Buraya Eklenecek, Mahalle, Cadde/Sokak, No, Zonguldak]. Kolay ulaşım için harita ve yol tarifi alın.",

  // Konum Sayfasının Canonical URL'si
  alternates: {
    canonical: "/konum", // Sitenizdeki gerçek yol neyse onu yazın (/location, /ulasim vb.)
  },

  // Konum Sayfasına Özel Anahtar Kelimeler (Adresi ve semti ekleyin!)
  keywords: [
    "Can Dostlar Veteriner adres",
    "Zonguldak veteriner konumu",
    "veteriner nerede Zonguldak",
    "hayvan kliniği harita",
    "Zonguldak veteriner ulaşım",
    "Can Dostlar Veteriner yol tarifi",
    "[Semt Adı] veteriner", // Örn: 'Bahçelievler veteriner'
    "[Cadde/Sokak Adı] veteriner", // Örn: 'Gazipaşa Caddesi veteriner'
    "Zonguldak merkez veteriner", // Konuma göre güncelleyin
  ],

  // Konum Sayfası için Open Graph Bilgileri (Adresi Ekleyin!)
  openGraph: {
    title: "Konum & Yol Tarifi | Can Dostlar Veteriner Kliniği (Zonguldak)",
    description:
      "Kliniğimizin Zonguldak'taki yerini kolayca bulun: [Tam Adres Buraya Eklenecek]. Harita için tıklayın!",
    url: "/konum", // Sayfanın URL'si
    images: [
      {
        // Konum sayfası için statik bir harita ekran görüntüsü (pin işaretli)
        // veya klinik dış cephesinin net bir fotoğrafı çok uygun olur.
        url: "/klinik-konum-og.jpg", // Örnek: Bu isimde bir görseli public klasörüne eklemelisiniz (1200x630 önerilir)
        width: 1200,
        height: 630,
        alt: "Can Dostlar Veteriner Kliniği Konumu Haritası - Zonguldak",
      },
    ],
    // siteName, locale, type layout.tsx'ten miras alınır.
  },

  // Konum Sayfası için Twitter Kartı (Adresi Ekleyin!)
  twitter: {
    card: "summary_large_image",
    title: "Konum - Can Dostlar Veteriner Kliniği (Zonguldak)",
    description:
      "Zonguldak'taki adresimiz: [Tam Adres Buraya Eklenecek]. Kolay ulaşım için harita mevcut.",
    images: ["/klinik-konum-og.jpg"], // OG ile aynı görsel önerilir
  },
  // robots, authors layout.tsx'ten miras alınır.
};

// ===> SAYFA KOMPONENTİ (Artık bir Sunucu Bileşeni) <===
export default function KonumPage() {
  // İsmi değiştirmek iyi pratik
  // "use client" direktifi kaldırıldı.
  // Metadata buradan ihraç edilebilir.

  // Interaktif harita vb. içeren Location bileşeni render ediliyor.
  // Location bileşeni kendi dosyasında "use client" kullanabilir.
  return (
    <div>
      <Location />
    </div>
  );
}
