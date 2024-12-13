import { AuthNav } from "@/app/components/nav/AuthNav";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<AuthNav />
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="w-1/4 bg-background rounded-lg shadow-md h-1/2 flex flex-col justify-around p-4">
					{children}
				</div>
			</div>
		</>
	);
}
