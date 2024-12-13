import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup() {
	return (
		<>
			{/* message */}
			<div className="flex flex-col space-y-2 text-center">
				<h1 className="text-2xl font-semibold tracking-tight">
					Welcome
				</h1>
			</div>

			{/* form */}
			<form className="space-y-4">
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						placeholder="name@example.com"
						type="email"
						autoCapitalize="none"
						autoComplete="email"
						autoCorrect="off"
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="password">Password</Label>
					<Input
						id="password"
						placeholder="Enter your password"
						type="password"
						autoCapitalize="none"
						autoCorrect="off"
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="password">Confirm Password</Label>
					<Input
						id="password"
						placeholder="Confirm your password"
						type="password"
						autoCapitalize="none"
						autoCorrect="off"
					/>
				</div>
				<Button className="w-full">Sign Up</Button>
			</form>

			{/* link */}
			<p className="px-8 text-center text-sm text-muted-foreground">
				<Link
					href="/login"
					className="hover:text-primary underline underline-offset-4"
				>
					Already a member? Sign In
				</Link>
			</p>
		</>
	);
}
