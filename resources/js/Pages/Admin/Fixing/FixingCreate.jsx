import CopyrightComponent from "@/Components/CopyrightComponent";
import CreateComponent from "@/Components/FixingComponent/CreateComponent";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const FixingCreate = (props) => {
    return (
        <>
            <Head title="Create Perbaikan" />
            <Navbar />
            <div className="flex justify-start w-3/6 ml-10 bg-yellow-400 rounded-md mb-5 shadow-md">
                <h2 className="font-bold text-2xl pl-5 py-2">
                    Create New Perbaikan
                </h2>
            </div>
            <CreateComponent datas={props} />
            <div className="mt-5" />
            <CopyrightComponent />
        </>
    );
};

export default FixingCreate;
