import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TopNav() {
    return (
        <header className=" bg-white shadow-md fixed w-screen flex justify-between px-6">
            <div className="h-16 flex items-center ">
                <Sparkles />
                <h1 className="text-3xl font-bold">
                    AutoAlt
                </h1>
            </div>
            <div className="flex flex-row items-center">
                <Button className="mr-2" >
                    login
                </Button>
                <Button>
                    signup
                </Button>
            </div>
        </header>
    );
}