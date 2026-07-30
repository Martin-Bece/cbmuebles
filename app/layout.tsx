import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Cambiamos los metadatos para que sean los reales de la empresa
export const metadata: Metadata = {
  title: "CB Muebles | Muebles a Medida",
  description: "Diseño y fabricación artesanal de muebles personalizados para el hogar y la oficina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es" // Cambiado a español para mejorar el SEO local
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* El body ya estira al 100% y toma los colores del logo automáticamente desde globals.css */}
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}