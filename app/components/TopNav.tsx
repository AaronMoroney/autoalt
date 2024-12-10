"use client";

import React, { useState } from "react";
import { Sparkles, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopNav() {
	const [theme, setTheme] = useState("light");

	const handleToggle = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<header className="bg-white shadow-md fixed w-screen flex justify-between px-6 z-50">
			<div className="h-16 flex items-center ">
				<h1 className="text-3xl font-bold">AutoAlt</h1>
				<Sparkles className="ml-1" />
			</div>
			<div className="flex flex-row items-center">
				<Button className="mr-2" variant="ghost" onClick={handleToggle}>
					{theme === "light" ? <Moon /> : <Sun />}
				</Button>
				<Button variant="outline" className="mr-2">
					login
				</Button>
				<Button>signup</Button>
			</div>
		</header>
	);
}
