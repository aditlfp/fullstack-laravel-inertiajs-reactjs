import { Link, useForm } from "@inertiajs/react";
import BtnEditMini from "./BtnEditMini";
import BtnDeleteMini from "./BtnDeleteMini";
import Modal from "@/Components/Modal";
import { useState } from "react";
import SecondaryButton from "./SecondaryButton";


const isCustomer = (datas) => {
    const [confirmingFixDeletion, setConfirmingFixDeletion] = useState(false);
    const {data, setData, processing} = useForm({
        id: ""
    });

    // Modal
    const confirmFixDeletion = () => {
        setConfirmingFixDeletion(true);
    };

    const closeModal = () => {
        setConfirmingFixDeletion(false);
    };

    const TimeOut = () => {
        setTimeout(() => {
            setConfirmingFixDeletion(false);
        }, 2000);
    }
    // End Modal
    return (
        <table className="table table-zebra table-xs">
            <thead>
                <tr className="bg-slate-100">
                    <th>#</th>
                    <th>Pemilik</th>
                    <th>No. Plate</th>
                    <th>Nama Kendaraan</th>
                    <th>Tahun Kendaraan</th>
                    <th>Model</th>
                    <th>Model Tahun</th>
                    <th>Warna</th>
                    <th>Kode Warna</th>
                    <th>Keterangan</th>
                    <th>No. Hp</th>
                    <th>Alamat</th>
                    <th>Last Service Date</th>
                    <th>Service Date</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {datas ? (
                    datas.map((data, i) => {
                        return (
                            <tr key={data.id}>
                                <th>{i + 1}</th>
                                <td>{data.owner}</td>
                                <td>{data.no_plate}</td>
                                <td>{data.nama_kendaraan}</td>
                                <td>{data.tahun_kendaraan}</td>
                                <td>{data.model}</td>
                                <td>{data.tahun}</td>
                                <td>{data.nama_warna}</td>
                                <td>{data.code_warna}</td>
                                <td>{data.keterangan_warna}</td>
                                <td>{data.mobile_phone}</td>
                                <td>{data.alamat}</td>
                                <td>{data.last_service_date ? data.last_service_date : <span className="flex justify-center">~</span>}</td>
                                <td>{data.service_date}</td>
                                <td className="flex gap-1">
                                    <Link
                                        href={"customer/" + data.id + "/edit"}
                                        method="get"
                                        as="button"
                                    >
                                        <BtnEditMini />
                                    </Link>

                                    <Modal
                                                show={confirmingFixDeletion}
                                                onClose={closeModal}
                                            >
                                                <div className="flex justify-end items-center">
                                                    <button className="bg-red-600 absolute top-5 right-5 py-[0.32rem] px-3 rounded-xl text-white font-bold hover:bg-red-800 transition-all ease-in-out .2s" onClick={closeModal}>X</button>
                                                </div>
                                                <div className="m-10">
                                                    <h2 className="text-xl font-bold text-gray-900">
                                                        Kamu Yakin Ingin
                                                        Menghapus Data Ini ?
                                                    </h2>

                                                    <p className="mt-1 text-sm text-gray-600">
                                                        Setelah data ini dihapus,
                                                        semua sumber daya dan
                                                        datanya akan dihapus
                                                        secara permanen.
                                                        Silahkan Anda untuk
                                                        konfirmasikan bahwa Anda
                                                        ingin menghapus data
                                                        Anda secara permanen.
                                                    </p>

                                                    <div className="mt-6 flex justify-end">
                                                        <SecondaryButton
                                                            onClick={closeModal}
                                                        >
                                                            Batalkan
                                                        </SecondaryButton>
                                                        <Link
                                                            className="ml-3 btn bg-red-400 hover:bg-red-500 transition-colors ease-linear .2s"
                                                            disabled={
                                                                processing
                                                            }
                                                            href={
                                                                "customer/" +
                                                                data.id
                                                            }
                                                            method="delete"
                                                            data={{
                                                                id: data.id,
                                                            }}
                                                            as="button"
                                                            onClick={TimeOut}
                                                        >
                                                            {processing ? (
                                                                <span className="loading loading-spinner"></span>
                                                            ) : (
                                                                ""
                                                            )}
                                                            Konfirmasi Hapus Data
                                                        </Link>
                                                    </div>
                                                </div>
                                            </Modal>
                                            <button
                                                onClick={confirmFixDeletion}
                                            >
                                                <BtnDeleteMini />
                                            </button>
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <th>
                        <tr colSpan="6" className="text-center">
                            Customer Masih Kosong
                        </tr>
                    </th>
                )}
            </tbody>
            <tfoot>
                <tr className="bg-slate-100">
                    <th>#</th>
                    <th>Pemilik</th>
                    <th>No. Plate</th>
                    <th>Nama Kendaraan</th>
                    <th>Tahun Kendaraan</th>
                    <th>Model</th>
                    <th>Model Tahun</th>
                    <th>Warna</th>
                    <th>Kode Warna</th>
                    <th>Keterangan</th>
                    <th>No. Hp</th>
                    <th>Alamat</th>
                    <th>Last Service Date</th>
                    <th>Service Date</th>
                    <th>Action</th>
                </tr>
            </tfoot>
        </table>
    );
};

const notData = () => {
    return (
        <>
            <div className="text-center my-2">
                <span className="text-center font-bold">
                    Customer Masih Kosong
                </span>
            </div>
        </>
    );
};

function CustomerList({ datas }) {
    return !datas ? notData() : isCustomer(datas.data);
}

export default CustomerList;
