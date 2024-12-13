import clsx from "clsx";
import { ArchiveIcon, FolderDot } from "lucide-react";

interface AsideNavProps {
	isOpen: boolean;
}

const items = [
	{
		title: "Current",
		icon: FolderDot,
	},
	{
		title: "Previous",
		icon: ArchiveIcon,
	},
];

export function AsideNav({ isOpen }: AsideNavProps) {
	return (
		<aside
			className={clsx(
				"h-full w-1/6 bg-slate-50 p-6",
				isOpen ? "block" : "hidden"
			)}
		>
			<div className="flex flex-col">
				{items.map((item) => (
					<div
						className="flex items-center space-x-4 mb-2"
						key={item.title}
					>
						<item.icon />
						<span>{item.title}</span>
					</div>
				))}
			</div>
		</aside>
	);
}
