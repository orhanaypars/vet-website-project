import React from "react";

function Location() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 px-4 py-8">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-green-700 dark:text-green-400 mb-4">
          Konumumuz
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-6">
          Kliniğimizi ziyaret etmek için aşağıdaki haritayı kullanabilirsiniz.
        </p>
        <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95696.01585730468!2d31.637758897265627!3d41.450058899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409c7c89c7258c17%3A0x2c5d2752fb4111f9!2sZonguldak%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1744248682086!5m2!1str!2str"
            width="100%"
            height="100%"
            className="border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Location;
