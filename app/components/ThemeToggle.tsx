"use client";

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
	const [theme, setTheme] = useState("light");

	const handleToggle = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<Button className="mr-2" variant="ghost" onClick={handleToggle}>
			{theme === "light" ? <Moon /> : <Sun />}
		</Button>
	);
}
