"use client";

import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export function TopNav() {
	const router = useRouter();

	return (
		<header className="bg-white shadow-md fixed w-screen flex justify-between px-6 z-50">
			<div className="h-16 flex items-center ">
				<h1 className="text-3xl font-bold">AutoAlt</h1>
				<Sparkles className="ml-1" />
			</div>
			<div className="flex flex-row items-center">
				<ThemeToggle />
				<Button
					variant="outline"
					className="mr-2"
					onClick={() => router.push("/login")}
				>
					login
				</Button>
				<Button onClick={() => router.push("/signup")}>signup</Button>
			</div>
		</header>
	);
}
