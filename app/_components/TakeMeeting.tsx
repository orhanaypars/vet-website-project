"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { toast } from "sonner";
import Location from "./Location";

function TakeMeeting() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleMeetingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Randevunuz başarıyla oluşturuldu!");
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız başarıyla gönderildi!");
  };

  return (
    <div>
      <div className="mt-20 mb-5 text text-center">
        <h1 className="text-4xl lg:text-5xl text-green-800 uppercase font-bold dark:text-white">
          Bize ulaşın
        </h1>
      </div>
      <div className="flex flex-col gap-12 min-h-screen bg-gradient-to-b from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
        {/* Formlar ve Konum */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* İletişim Formu */}
          <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
              İletişim
            </h1>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              {/* İsim */}
              <div>
                <Label
                  htmlFor="contact-name"
                  className="text-gray-700 dark:text-gray-300"
                >
                  İsim
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Adınızı girin"
                  className="mt-1"
                />
              </div>

              {/* E-posta */}
              <div>
                <Label
                  htmlFor="contact-email"
                  className="text-gray-700 dark:text-gray-300"
                >
                  E-posta
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className="mt-1"
                />
              </div>

              {/* Mesaj */}
              <div>
                <Label
                  htmlFor="contact-message"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </Label>
                <textarea
                  id="contact-message"
                  placeholder="Mesajınızı yazın"
                  className="mt-1 w-full h-24 p-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
                />
              </div>

              {/* Gönder Butonu */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                >
                  Mesaj Gönder
                </Button>
              </div>
            </form>
          </div>

          {/* Randevu Alma Formu */}
          <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h1 className="text-2xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
              Randevu Al
            </h1>
            <form className="space-y-4" onSubmit={handleMeetingSubmit}>
              {/* İsim */}
              <div>
                <Label
                  htmlFor="name"
                  className="text-gray-700 dark:text-gray-300"
                >
                  İsim
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Adınızı girin"
                  className="mt-1"
                />
              </div>

              {/* E-posta */}
              <div>
                <Label
                  htmlFor="email"
                  className="text-gray-700 dark:text-gray-300"
                >
                  E-posta
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className="mt-1"
                />
              </div>

              {/* Telefon */}
              <div>
                <Label
                  htmlFor="phone"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Telefon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Telefon numaranızı girin"
                  className="mt-1"
                />
              </div>

              {/* Randevu Tarihi */}
              <div>
                <Label
                  htmlFor="date"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Randevu Tarihi
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left mt-1"
                    >
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "Tarih seçin"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Gönder Butonu */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
                >
                  Randevu Al
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Konum Bileşeni */}
        <div className="w-full">
          <Location />
        </div>
      </div>
    </div>
  );
}

export default TakeMeeting;
