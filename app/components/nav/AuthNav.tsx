import Link from "next/link";
import { Sparkles } from "lucide-react";

export function AuthNav() {
	return (
		<header className="bg-white shadow-md fixed w-screen flex justify-between px-6 z-50">
			<Link href="/">
				<div className="h-16 flex items-center">
					<h1 className="text-3xl font-bold">AutoAlt</h1>
					<Sparkles className="ml-1" />
				</div>
			</Link>
		</header>
	);
}
