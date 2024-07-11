import type { Metadata } from "next";
import { Mooli } from "next/font/google";
import NavbarNextUi from "../componentsUi/NavbarNextUi";
import UserAos from "./AosChildren/UserAos";
import "./globals.css";
import { Providers } from "./providers";
import "/css/fontStyle.css";
import "/css/Uiverse.css";

const fontStyle = Mooli({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Next Practice",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning={true}>
      <body className={fontStyle.className}>
        <Providers>
          <div className="">
            <UserAos>
              <NavbarNextUi />
              {children}
            </UserAos>
          </div>
        </Providers>
      </body>
    </html>
  );
}
