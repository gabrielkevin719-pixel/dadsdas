import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Teste seus conhecimentos com nosso quiz interativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-[var(--background)]">
      <body>{children}</body>
    </html>
  );
}
