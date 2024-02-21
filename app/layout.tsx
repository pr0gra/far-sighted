import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "да/но",
  description:
    "Дальновидно — агентство дизайн-инициатив. Команда, которая инициирует уникальные дизайн-проекты с проактивной позицией прямого социального воздействия, преодолевая разрыв между замыслом и реализацией.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
