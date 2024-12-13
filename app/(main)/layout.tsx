import type { Metadata } from "next";

import { NavigationStateWrapper } from "@/app/components/NavigationStateWrapper";
import { TopNav } from "@/app/components/nav/TopNav";

export const metadata: Metadata = {
	title: "AutoAlt",
	description:
		"AutoAlt is a tool for generating alternative text for images.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<TopNav />
			<NavigationStateWrapper>{children}</NavigationStateWrapper>
		</>
	);
}
