import "./globals.css";
import { Montserrat } from 'next/font/google'

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
        className={`w-full h-full sitePallete ${montserrat.className}`}
      >
        {children}
      </body>
    </html>
  );
}
