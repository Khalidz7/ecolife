import type { Metadata } from "next";
import NavLink from "@/components/navLink";
import "./styles/globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "EcoLife",
  description: "Khalid's and Ali's Homework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">
        <div className="min-h-full">
          <nav className="bg-gray-900">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-md">
                    <Image
                      src="/assets/logo.png"
                      width={400}
                      height={400}
                      alt="a corprate logo"
                    />
                  </div>
                  <div className="hidden md:block ml-10">
                    <NavLink href="/" text="Home" />
                    <NavLink href="/products" text="Products" />
                    <NavLink href="/contact" text="Contact" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <main className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
