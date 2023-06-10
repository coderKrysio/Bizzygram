import "./globals.css";
import { Nunito } from 'next/font/google'

const nunito = Nunito({ 
  weight: '500',
  subsets: ['latin']
})

export const metadata = {
  title: "Bizzygram",
  description: "Bizzygram - Connect with a Tap, Your Network in One Snap!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='https://res.cloudinary.com/db7nrltsv/image/upload/v1686427149/letter-b_1_kj6kzc.png'/>
      </head>
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
