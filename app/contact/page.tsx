// app/iletisim/page.tsx (veya /contact/page.tsx)

// 1. Metadata tipini import edin
import type { Metadata } from "next";

// 2. Interaktif olabilecek asıl iletişim bileşenini import edin
import Contact from "../_components/Contact"; // Bu bileşen "use client" kullanabilir

// ===> İLETİŞİM SAYFASI İÇİN METADATA OBJESİ <===
export const metadata: Metadata = {
  // İletişim Sayfasına Özel Başlık (layout template'ini kullanır)
  title: "İletişim - Randevu ve Adres Bilgileri", // Sonuç: "İletişim - Randevu ve Adres Bilgileri | Can Dostlar Veteriner Kliniği"

  // İletişim Sayfasına Özel Açıklama
  description:
    "Zonguldak Can Dostlar Veteriner Kliniği ile iletişime geçin. Randevu almak, adres tarifi almak veya hizmetlerimiz hakkında bilgi sormak için iletişim bilgilerimizi ve formumuzu kullanın.",

  // İletişim Sayfasının Canonical URL'si
  alternates: {
    canonical: "/iletisim", // Sitenizdeki gerçek yol ile değiştirin (/contact vb.)
  },

  // İletişim Sayfasına Özel Anahtar Kelimeler
  keywords: [
    "Can Dostlar Veteriner iletişim",
    "Zonguldak veteriner randevu",
    "veteriner adres Zonguldak",
    "veteriner telefon",
    "hayvan kliniği ulaşım",
    "veteriner iletişim formu",
    "Can Dostlar Veteriner nerede",
    "acil veteriner iletişim",
  ],

  // İletişim Sayfası için Open Graph Bilgileri
  openGraph: {
    title: "İletişim | Can Dostlar Veteriner Kliniği (Zonguldak)",
    description:
      "Randevu ve sorularınız için Zonguldak Can Dostlar Veteriner Kliniği'ne ulaşın. Adres ve telefon bilgileri.",
    url: "/iletisim", // Sayfanın URL'si
    images: [
      {
        // İletişim sayfası için uygun bir görsel ekleyin:
        // Klinik dış cephe fotoğrafı, harita görüntüsü veya genel bir iletişim görseli olabilir.
        url: "/klinik-iletisim-og.jpg", // Örnek: Bu isimde bir görseli public klasörüne eklemelisiniz (1200x630 önerilir)
        width: 1200,
        height: 630,
        alt: "Can Dostlar Veteriner Kliniği İletişim Bilgileri",
      },
    ],
    // siteName, locale, type layout.tsx'ten miras alınır.
  },

  // İletişim Sayfası için Twitter Kart Bilgileri
  twitter: {
    card: "summary_large_image", // İyi bir görsel varsayımıyla
    title: "İletişim - Can Dostlar Veteriner Kliniği (Zonguldak)",
    description: "Randevu, adres ve diğer sorularınız için bize ulaşın.",
    images: ["/klinik-iletisim-og.jpg"], // OG ile aynı görsel önerilir
  },
  // robots, authors layout.tsx'ten miras alınır.
};

// ===> SAYFA KOMPONENTİ (Artık bir Sunucu Bileşeni) <===
// Fonksiyon adını "page" yerine daha açıklayıcı yapmak iyi bir pratiktir.
export default function ContactPage() {
  // Bu dosya artık "use client" direktifi içermiyor.
  // Metadata buradan ihraç edilebilir.

  // Interaktif olan Contact bileşeni burada render ediliyor.
  // Contact bileşeni kendi dosyasında "use client" kullanabilir.
  return (
    <div>
      <Contact />
    </div>
  );
}
