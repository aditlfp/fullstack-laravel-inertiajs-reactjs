import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gradient-to-tr from-cyan-500 to-indigo-500 backdrop-filter backdrop-blur-2xl backdrop-brightness-50 overflow-hidden">
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-inner shadow-gray-500 overflow-hidden sm:rounded-lg">
                <div>
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                    </Link>
                </div>
                {children}
            </div>
        </div>
    );
}
