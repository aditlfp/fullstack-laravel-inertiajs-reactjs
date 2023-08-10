import CopyrightComponent from "@/Components/CopyrightComponent";
import Create from "@/Components/CreateExitsCustomer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

const CreateExistCustomer = (customer) => {
    return (
        <>
            <Head title="Create Customer" />
            <Navbar />
            <div className="flex justify-start w-3/6 ml-10 bg-yellow-400 rounded-md mb-5 shadow-md">
                <h2 className="font-bold text-2xl pl-5 py-2">
                    Buat Customer Yang Sudah Ada
                </h2>
            </div>
            <Create datas={customer} />
            <div className="mt-5" />
            <CopyrightComponent />
        </>
    );
};

export default CreateExistCustomer;
