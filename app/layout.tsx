import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Tech IT Solutions",
  description: "Empresa especializada en el diseño, implementación y mantenimiento de soluciones tecnológicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
