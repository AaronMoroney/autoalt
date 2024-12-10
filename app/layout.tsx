import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { NavigationStateWrapper } from "@/app/components/NavigationStateWrapper";
import { TopNav } from "@/app/components/TopNav";

export const metadata: Metadata = {
	title: "AutoAlt",
	description:
		"AutoAlt is a tool for generating alternative text for images.",
};

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} antialiased`}>
				<TopNav />
				<main className="flex flex-col">
					<NavigationStateWrapper>{children}</NavigationStateWrapper>
				</main>
			</body>
		</html>
	);
}
