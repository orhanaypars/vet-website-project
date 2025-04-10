// page.tsx dosyasının en başına ekleyin
import type { Metadata } from "next";

import HeroSection from "@/app/_components/HeroSection";
import { Features } from "./_components/Features";
import VetsInfo from "./_components/VetsInfo";
import TakeMeeting from "./_components/TakeMeeting";

// ===> ANA SAYFA İÇİN METADATA OBJESİ <===
export const metadata: Metadata = {
  // Ana Sayfaya Özel Başlık: Klinik adı, konumu ve ana hizmet vurgusu.
  // Bu, layout.tsx'teki varsayılan başlığı bu sayfa için ezer.
  title:
    "Can Dostlar Veteriner Kliniği - Zonguldak Güvenilir Hayvan Sağlığı Merkezi",

  // Ana Sayfaya Özel Açıklama: Kliniğin genel tanıtımı, ana hizmetler ve çağrı.
  description:
    "Zonguldak Can Dostlar Veteriner Kliniği: Sevimli dostlarınız için kapsamlı teşhis, tedavi, acil müdahale, aşı ve cerrahi hizmetleri. Deneyimli ekibimizle tanışın, randevu alın!",

  // Ana Sayfanın Canonical URL'si (Mutlaka belirtilmeli)
  // Bu, arama motorlarına bu sayfanın sitenin kök URL'si olduğunu söyler.
  alternates: {
    canonical: "/",
  },

  // Ana Sayfa için Open Graph (Sosyal Medya Paylaşım) Bilgileri
  // layout.tsx'teki genel ayarlara göre daha spesifik olabilir veya aynı kalabilir.
  openGraph: {
    title: "Can Dostlar Veteriner Kliniği - Zonguldak Evcil Hayvan Hastanesi", // Biraz daha dikkat çekici bir başlık
    description:
      "Zonguldak'ta evcil hayvanlarınız için şefkatli ve modern veterinerlik hizmetleri. Acil durumlar, rutin kontroller ve daha fazlası için buradayız.", // Biraz farklılaştırılmış açıklama
    url: "/", // Kök URL (metadataBase'e göre)
    images: [
      {
        url: "/hero-image.jpg", // Ana sayfa için kullanılacak görsel (public klasöründe olduğundan emin olun)
        width: 1200,
        height: 630,
        alt: "Can Dostlar Veteriner Kliniği Zonguldak - Karşılama", // Açıklayıcı alt metin
      },
    ],
    // siteName, locale, type gibi diğer OG etiketleri genellikle layout.tsx'ten miras alınır.
    // Gerekirse burada override edilebilirler.
  },

  // Ana Sayfa için Twitter Kart Bilgileri
  twitter: {
    card: "summary_large_image",
    title: "Can Dostlar Veteriner Kliniği | Zonguldak", // Twitter için daha kısa başlık
    description:
      "Zonguldak'ta evcil hayvanlarınız için şefkatli ve modern veterinerlik hizmetleri sunuyoruz.",
    images: ["/hero-image.jpg"], // Twitter için görsel (aynı veya farklı olabilir)
  },

  // keywords, robots, authors gibi diğer etiketler genellikle layout.tsx'ten miras alınır.
  // Eğer ana sayfaya özel anahtar kelimeler eklemek isterseniz, buraya 'keywords' alanı ekleyebilirsiniz.
  // keywords: ['Zonguldak veteriner', 'acil veteriner', 'evcil hayvan kliniği', ...layoutKeywords], // Örnek
};

// ===> MEVCUT SAYFA KOMPONENTİNİZ <===
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Features />
      <VetsInfo />
      <TakeMeeting />
    </div>
  );
}
