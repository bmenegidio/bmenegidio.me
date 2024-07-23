import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Patua_One } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--body-font' });
const jetBrains_Mono = JetBrains_Mono({ subsets: ['latin'], variable: '--code-font' });
const patua_One = Patua_One({ weight: ['400'], subsets: ['latin'], variable: '--heading-font' });

export const metadata: Metadata = {
  title: 'Bruno Menegidio da Silva - Software Engineer',
  description:
    'Desenvolvedor Web, com experiência em tecnologias como; Angular, React.JS, Next.JS, Node.JS, Nest.JS, MongoDB..',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetBrains_Mono.variable} ${patua_One.variable}`}>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-MTJD4TTSVC" />
    </html>
  );
}
