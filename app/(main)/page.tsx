"use client";

import { PanelRight } from "lucide-react";

import { useNavigation } from "@/app/context/NavigationContext";
import { ImagesUploader } from "@/app/components/dashboard/ImagesUploader";

export default function Page() {
	const { toggleNav } = useNavigation();
	return (
		<div>
			<button onClick={toggleNav}>
				<PanelRight />
			</button>
			<ImagesUploader />
		</div>
	);
}
