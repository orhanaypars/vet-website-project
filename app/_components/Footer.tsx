import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-700 dark:bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo ve Açıklama */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white dark:text-green-400">
              VetClinic
            </h2>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-400">
              Hayvan dostlarınızın sağlığı için en iyi hizmeti sunuyoruz.
            </p>
          </div>

          {/* Hızlı Erişim Bağlantıları */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white dark:text-green-400">
              Hızlı Erişim
            </h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:underline text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
                >
                  Hizmetlerimiz
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
                >
                  Hakkımızda
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="hover:underline text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
                >
                  Randevu Al
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white dark:text-green-400">
              İletişim
            </h3>
            <p className="mt-2 text-sm text-gray-300 dark:text-gray-400">
              Adres: Zonguldak Veteriner Kliniği
            </p>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Telefon: +90 555 555 55 55
            </p>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              E-posta: info@vetclinic.com
            </p>
          </div>

          {/* Sosyal Medya */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white dark:text-green-400">
              Bizi Takip Edin
            </h3>
            <div className="flex justify-center md:justify-start mt-2 space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-green-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-8 border-t border-gray-600 dark:border-gray-700 pt-4 text-center text-sm text-gray-400 dark:text-gray-500">
          © 2025 VetClinic. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
