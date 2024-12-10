"use client";

import { createContext, useContext, useState } from "react";

interface NavigationContextType {
	isNavOpen: boolean;
	toggleNav: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
	undefined
);

export function NavigationProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isNavOpen, setIsNavOpen] = useState(true);

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	return (
		<NavigationContext.Provider value={{ isNavOpen, toggleNav }}>
			{children}
		</NavigationContext.Provider>
	);
}

export function useNavigation() {
	const context = useContext(NavigationContext);
	if (context === undefined) {
		throw new Error(
			"useNavigation must be used within a NavigationProvider"
		);
	}
	return context;
}
