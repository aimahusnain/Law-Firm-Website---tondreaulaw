import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";

const helvetica = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueBlack.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBlackItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeueBold.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueBoldItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeueHeavy.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueHeavyItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeueItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeueLight.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueLightItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeueMedium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueMediumItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeueRoman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueThin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueThinItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/HelveticaNeueUltraLight.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueUltraLightItalic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "FritzGerald Tondreau Esq.",
  description: "Here to fight to protect your legal rights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#09090B" />
      </head>
      <body className={helvetica.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
