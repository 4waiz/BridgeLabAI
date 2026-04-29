import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "BridgeLab AI — Bilingual STEM lab coach",
  description:
    "Arabic-English GenAI lab troubleshooting coach for STEM education. Hint-first guidance for students, class insights for teachers.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <I18nProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
