import Banner from '@/components/Banner';
import Header from '@/components/Header';
import '../globals.css';

export const metadata = {
  title: 'My Blog',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='max-w-7xl mx-auto'>
        <Header />
        <Banner />
        {/* children is what's in page.tsx and below */}
        {children}
      </body>
    </html>
  );
}
