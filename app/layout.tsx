import type { Metadata, Viewport } from "next"; // Metadata ve Viewport tiplerini import ediyoruz
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google"; // Font importları varsayılan olarak kalsın
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";

// Font tanımlamaları olduğu gibi kalıyor
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ===> YENİ METADATA OBJESİ <===
// Tüm SEO ve metadata bilgileri artık burada yönetilecek.
export const metadata: Metadata = {
  // metadataBase: Temel URL'yi belirtir, diğer URL'ler buna göre çözümlenir.
  metadataBase: new URL("https://vet-website-project.vercel.app/"), // Kendi alan adınızı yazdığınızdan emin olun!

  // Sayfa Başlığı Ayarları (title.default ana sayfa/varsayılan, template alt sayfalar için)
  title: {
    default: "Can Dostlar Veteriner Kliniği - Zonguldak", // Ana sayfa başlığı (Konum eklemek faydalı olabilir)
    template: "%s | Can Dostlar Veteriner Kliniği", // Alt sayfa şablonu
  },
  // Meta Açıklaması
  description:
    "Zonguldak Can Dostlar Veteriner Kliniği olarak evcil dostlarınıza modern ve güvenilir sağlık hizmeti sunuyoruz. Hemen randevu alın!", // Konumu eklemek yerel SEO için iyi olabilir.

  // Anahtar Kelimeler (keywords)
  keywords: [
    "veteriner",
    "Zonguldak veteriner",
    "hayvan sağlığı",
    "pet kliniği",
    "veteriner hizmetleri",
    "uzman veteriner",
    "acil veteriner Zonguldak",
    "kedi",
    "köpek",
    "evcil hayvan",
  ],

  // Yazar Bilgisi
  authors: [{ name: "Can Dostlar Veteriner Kliniği" }], // URL de ekleyebilirsiniz: { name: '...', url: '...' }

  // Robots Meta Etiketi (Arama motoru botları için talimatlar)
  robots: {
    index: true,
    follow: true,
    // googleBot: { index: true, follow: true } // Google özelinde de belirtebilirsiniz
  },

  // Favicon Ayarları (public klasöründeki ikon yolu)
  icons: {
    icon: "/logo.png",
    // veya /favicon.ico gibi
    // apple: '/apple-touch-icon.png', // Apple cihazlar için
  },

  // Open Graph (Facebook, LinkedIn vb. için)
  openGraph: {
    title: "Can Dostlar Veteriner Kliniği - Zonguldak",
    description:
      "Evcil dostlarınıza modern ve güvenilir sağlık hizmeti sunuyoruz. Hemen randevu alın!",
    url: "/", // metadataBase'e göre kök dizin
    siteName: "Can Dostlar Veteriner Kliniği",
    images: [
      // Resim(ler)
      {
        url: "/hero-image.jpg", // metadataBase'e göre göreceli yol (public klasöründe olmalı)
        width: 1200, // Önerilen boyutlar
        height: 630,
        alt: "Can Dostlar Veteriner Kliniği karşılama görseli", // Resim için açıklama ekleyin
      },
    ],
    locale: "tr_TR",
    type: "website",
  },

  // Twitter Kartları
  twitter: {
    card: "summary_large_image",
    title: "Can Dostlar Veteriner Kliniği - Zonguldak",
    description:
      "Evcil dostlarınıza modern ve güvenilir sağlık hizmeti sunuyoruz. Hemen randevu alın!",
    images: ["/hero-image.jpg"], // metadataBase'e göre göreceli yol
    // site: '@twitterhesabiniz', // Varsa Twitter hesabınız
    // creator: '@yaraticininhesabi', // İçeriği oluşturanın hesabı (opsiyonel)
  },

  // Canonical URL (Genellikle sayfa bazında belirlenir, layout'ta metadataBase yeterlidir,
  // ancak ana sayfa için burada da belirtilebilir veya app/page.tsx içinde ayarlanabilir)
  // alternates: {
  //   canonical: '/',
  // },

  // Manifest dosyası (PWA için)
  // manifest: '/manifest.json',
};

// ===> VIEWPORT AYARI <===
// Viewport meta etiketini de metadata yerine ayrı bir export ile yönetmek daha doğrudur.
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Kullanıcının zoom yapmasını engellemek isterseniz (erişilebilirlik açısından dikkatli kullanın)
  // themeColor: '#ffffff', // Tarayıcı UI rengi
};

// ===> ROOTLAYOUT BİLEŞENİ (Değişiklik Yok) <===
// RootLayout fonksiyonunuzun içeriği aynı kalıyor, sadece <Head> kısmı kaldırıldı.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      {/* <Head> bileşeni buradan kaldırıldı */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <Navbar />
            {children}
          </div>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
