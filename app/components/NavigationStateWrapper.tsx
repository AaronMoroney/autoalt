"use client";

import { AsideNav } from "./dashboard/AsideNav";
import {
	NavigationProvider,
	useNavigation,
} from "@/app/context/NavigationContext";

function NavigationContent({ children }: { children: React.ReactNode }) {
	const { isNavOpen } = useNavigation();
	return (
		<div className="flex h-screen mt-16 fixed w-screen">
			<AsideNav isOpen={isNavOpen} />
			<div className="m-6 w-full flex">
				<div className="w-5/6">{children}</div>
			</div>
		</div>
	);
}

export function NavigationStateWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NavigationProvider>
			<NavigationContent>{children}</NavigationContent>
		</NavigationProvider>
	);
}
