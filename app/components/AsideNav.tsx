import { ArchiveIcon } from "lucide-react"

const items = [
    {
        title: "Previous",
        icon: ArchiveIcon,
    },
]

export function AsideNav() {
    return (
        <aside className="h-full w-1/6 bg-slate-200 p-6">
            <div className="flex flex-col">
                {items.map((item) => (
                    <div 
                        className="flex items-center space-x-4"
                        key={item.title}
                    >
                        <item.icon />
                        <span>{item.title}</span>
                    </div>
                ))}
            </div>
        </aside>
    )
}