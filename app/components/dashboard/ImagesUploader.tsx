import { Plus } from "lucide-react";

export function ImagesUploader() {
	return (
		<div className="space-y-4">
			<label
				htmlFor="file-upload"
				className="max-w-60 h-60 rounded-xl bg-slate-50 hover:bg-blue-100 border-2 border-dashed border-blue-300 transition-colors duration-200 flex items-center justify-center cursor-pointer"
			>
				<input
					id="file-upload"
					type="file"
					className="hidden"
					multiple
					accept="image/*"
				/>
				<div className="flex flex-col items-center justify-center">
					<p>Drop image(s) here</p>
					<Plus />
				</div>
			</label>
		</div>
	);
}
