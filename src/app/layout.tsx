import Header from "@/components/header";
import "./globals.css";
import { Montserrat } from 'next/font/google'
import Footer from "@/components/footer";

export const metadata = {
  title: 'Mormito - Dev Fullstack',
}

const montserrat = Montserrat({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full min-h-screen flex flex-col sitePallete ${montserrat.className}`}
      >
        <Header />

        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
