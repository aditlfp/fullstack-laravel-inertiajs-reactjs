import Navbar from "@/Components/Navbar";
import { Head, Link } from "@inertiajs/react";
import FixingList from "../../../Components/FixingComponent/FixingList";
import Paginator from "@/Components/Paginator/Paginator";
import CopyrightComponent from "@/Components/CopyrightComponent";

const FixingIndex = (props) => {
    // console.log(props);
    return (
        <>
            <Head title="Perbaikan" />
            <Navbar />
            <div>
                <div className="flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-md">
                    <h2 className="font-bold text-2xl pl-5 py-2">
                        Daftar Data Perbaikan
                    </h2>
                </div>
                <div className="ml-10">
                    {props.flash.message != null && (
                        <div className="alert alert-success w-3/6 sm:w-[94%] mb-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{props.flash.message}</span>
                        </div>
                    )}
                    {props.flash.peringatan != null && (
                        <div className="alert alert-warning w-3/6 sm:w-[94%] mb-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                            <span>{props.flash.peringatan}</span>
                        </div>
                    )}
                </div>
                <div className="overflow-x-auto mx-10 rounded-md shadow-md">
                    <FixingList datas={props.fix} statuses={props.status} />
                </div>
                <div className="flex justify-center items-center mt-3">
                    <Paginator meta={props.fix.meta} />
                </div>
                <div className="flex justify-end mr-10 mt-5 gap-1">
                    <Link
                        href={route("dashboard")}
                        className="btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                    >
                        Kembali
                    </Link>
                    <Link
                        href={route("fixing.create")}
                        className="btn btn-warning hover:bg-yellow-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                    >
                        Tambah Data Perbaikan +
                    </Link>
                </div>
            </div>
            <CopyrightComponent />
        </>
    );
};

export default FixingIndex;
