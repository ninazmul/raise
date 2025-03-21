import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/fonts";
import ConfigureAmplifyClientSide from "@/app/amplify-cognito-config";

export const metadata: Metadata = {
  title: "Raise by Matrix Consulting",
  description:
    "Raise is a platform for Matrix Consulting | Build by ArtistyCode Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <>
          <ConfigureAmplifyClientSide />
          {children}
        </>
      </body>
    </html>
  );
}
