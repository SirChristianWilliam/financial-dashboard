import '@/app/ui/global.css';
import { myFonts } from '@/app/ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${myFonts.inter.className} antialiased`}>{children}</body>
    </html>
  );
}
