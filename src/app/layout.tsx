import { AppContexts } from "@/contexts";
import "./globals.css";

export const metadata = {
  title: "NFT Bloom",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppContexts>
      <html lang="en">
        <body>{children}</body>
      </html>
    </AppContexts>
  );
}
