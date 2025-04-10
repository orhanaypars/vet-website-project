"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız başarıyla gönderildi!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-green-100 dark:from-gray-900 dark:to-gray-800 px-4 py-8">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
          İletişim
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* İsim */}
          <div>
            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
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
            <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
              E-posta
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="E-posta adresinizi girin"
              className="mt-1"
            />
          </div>

          {/* Mesaj */}
          <div>
            <Label
              htmlFor="message"
              className="text-gray-700 dark:text-gray-300"
            >
              Mesaj
            </Label>
            <Textarea
              id="message"
              placeholder="Mesajınızı yazın"
              className="mt-1"
            />
          </div>

          {/* Gönder Butonu */}
          <div className="text-center">
            <Button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 dark:bg-green-700 dark:hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300"
            >
              Gönder
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
