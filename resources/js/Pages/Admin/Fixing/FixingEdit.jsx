import CopyrightComponent from "@/Components/CopyrightComponent";
import EditFixing from "@/Components/FixingComponent/EditFixing";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const FixingEdit = (props) => {
    return (
        <>
            <Head title="Edit Data Perbaikan" />
            <Navbar />
            <div className="flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-md">
                <h2 className="font-bold text-2xl pl-5 py-2">
                    Edit Data Perbaikan
                </h2>
            </div>
            <EditFixing props={props} />
            <CopyrightComponent />
        </>
    );
};

export default FixingEdit;
