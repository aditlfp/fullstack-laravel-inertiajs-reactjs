import ChartO from "@/Components/ChartO";
import FixO from "@/Components/FixO";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth, customer, fix }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-inner shadow-yellow-500">
                <h2 className="font-bold text-2xl pl-5 py-5 ">Dashboard</h2>
            </div>
            <Head title="Dashboard" />

            <div className="flex flex-row">
            <div className="mx-10 bg-indigo-500/90 max-w-sm flex rounded-md shadow-md pr-10 py-2">
                <div className="m-1 ml-5 my-2 bg-slate-200 shadow-inner shadow-indigo-800 rounded-2xl">
                    <ChartO />
                </div>
                <div className="font-bold text-xl ml-8 mt-5">
                    <span className="text-slate-200">Total Data Customer</span>
                    <div className="text-center bg-slate-200 rounded-md mt-2 shadow-inner shadow-indigo-800">
                        <span>{customer}</span>
                    </div>
                </div>
            </div>
            <div className="mx-10 bg-indigo-500/90 max-w-sm flex rounded-md shadow-md pr-10 py-2">
                <div className="m-1 ml-5 my-2 bg-slate-200 shadow-inner shadow-indigo-800 rounded-2xl">
                    <FixO />
                </div>
                <div className="font-bold text-xl ml-8 mt-5">
                    <span className="text-slate-200">Total Data Perbaikan</span>
                    <div className="text-center bg-slate-200 rounded-md mt-2 shadow-inner shadow-indigo-800">
                        <span>{fix}</span>
                    </div>
                </div>
            </div>
            </div>
            

            
        </AuthenticatedLayout>
    );
}
