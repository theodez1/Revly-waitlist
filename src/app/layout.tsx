import type { Metadata } from "next";
import { Geist_Mono, Inter_Tight } from "next/font/google";
import { Toaster } from "sonner";

import "./globals.css";
import Header from "~/components/header";
import { ThemeProvider } from "~/providers/theme-provider";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const interTight = Inter_Tight({
	variable: "--font-inter-tight",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://revly-waitlist.vercel.app'),
    title: "Revly — Enregistrez et partagez vos sorties",
    description:
        "Pensé pour les passionnés de la route. Suivi GPS précis, statistiques avancées et découverte de spots et routes d'exception.",
    icons: {
        icon: [
            { url: "/favicon.ico?v=2", type: "image/x-icon", sizes: "any" },
        ],
        apple: "/icon.png",
        shortcut: "/favicon.ico?v=2",
    },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="h-full dark" suppressHydrationWarning>
			<body
				className={`${interTight.variable} ${geistMono.variable} antialiased flex flex-col h-full bg-black`}
			>
				{/* Background glow (subtle, irregular) */}
				<div className="fixed inset-0 -z-10 pointer-events-none">
					{/* soft main blob */}
					<div className="absolute -top-64 left-[15%] w-[900px] h-[900px] rounded-full blur-[140px] opacity-[0.20] md:opacity-[0.12] bg-[#1E3A8A]" />
					{/* small off-center accent */}
					<div className="absolute top-[20%] right-[-5%] md:right-[-10%] w-[400px] md:w-[520px] h-[400px] md:h-[520px] rounded-full blur-[120px] opacity-[0.18] md:opacity-[0.08] bg-[#1E3A8A]" />
					{/* bottom faint wash */}
					<div className="absolute bottom-[-30%] left-1/4 md:left-1/3 w-[700px] md:w-[1000px] h-[450px] md:h-[600px] rounded-full blur-[160px] opacity-[0.15] md:opacity-[0.06] bg-[#1E3A8A]" />
					{/* mobile centered blob */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.12] md:opacity-0 bg-[#1E3A8A]" />
				</div>
				<ThemeProvider>
					<Header />
					<Toaster />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
