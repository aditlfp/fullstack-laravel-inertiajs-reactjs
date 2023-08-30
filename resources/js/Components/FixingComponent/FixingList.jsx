import { Link, useForm, usePage } from "@inertiajs/react";
import BtnEditMini from "../BtnEditMini";
import BtnDeleteMini from "../BtnDeleteMini";
import StatusBtn from "../StatusBtn";
import { useState } from "react";
import BtnInvoices from "../BtnInvoices";
import Modal from "@/Components/Modal";
import SecondaryButton from "../SecondaryButton";
import DangerButton from "../DangerButton";
import InputLabel from "../InputLabel";
import TextInput from "../TextInput";

const isFixing = (datas, statuses, props) => {
    const [notify, setNotify] = useState(false);
    const { auth } = usePage().props;
    const [confirmingFixDeletion, setConfirmingFixDeletion] = useState(false);
    const {
        data,
        setData,
        post,
        patch,
        errors,
        processing,
        delete: destroy,
    } = useForm({
        id: "",
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
    };
    // End Modal
    return (
        <table className="table table-zebra table-xs shadow-md">
            <thead>
                <tr className="bg-slate-100">
                    <th>#</th>
                    <th>Pemilik</th>
                    <th>No.Plat</th>
                    <th>Jenis Kendaraan</th>
                    <th>Warna</th>
                    <th>Kode Warna</th>
                    <th>Jenis Kerusakan</th>
                    <th>Panel</th>
                    <th>Tanggal Masuk</th>
                    <th>Tanggal Terakhir Servis</th>
                    <th>Lama Pengerjaan</th>
                    <th>Status</th>
                    <th>INV</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {datas ? (
                    datas.map((data, i) => {
                        return (
                            <tr key={data.id || ""}>
                                <th>{i + 1}</th>
                                <input
                                    type="text"
                                    className="hidden"
                                    value={data.id}
                                />
                                <td>{data.customer?.owner || "~"}</td>
                                <td>{data.customer?.no_plate || "~"}</td>
                                <td>
                                    {data.customer?.nama_kendaraan || "~"} |{" "}
                                    {data.customer?.model || "~"} |{" "}
                                    {data.customer?.tahun || "~"}
                                </td>
                                <td>{data.customer?.nama_warna || "~"}</td>
                                <td>{data.customer?.code_warna || "~"}</td>
                                <td>
                                    {data.jenis_kerusakan
                                        ? data.jenis_kerusakan.map(
                                              (kerusakan, index) => {
                                                  return (
                                                      <div
                                                          className="dashed"
                                                          key={index}
                                                      >
                                                          {kerusakan}
                                                      </div>
                                                  );
                                              }
                                          )
                                        : "Kerusakan Kosong"}
                                </td>
                                <td>
                                    {data.nama_panel
                                        ? data.nama_panel.map(
                                              (panel, index) => {
                                                  if (panel == "panel 1.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Samping Kiri
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 2.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Atas
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 3.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Samping Kanan
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 4.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Bamper Depan
                                                          </div>
                                                      );
                                                  }
                                                  if (panel == "panel 5.png") {
                                                      return (
                                                          <div
                                                              className="dashed"
                                                              key={index}
                                                          >
                                                              Body Bamper
                                                              Belakang
                                                          </div>
                                                      );
                                                  }
                                              }
                                          )
                                        : "Tidak Ada Panel"}
                                </td>
                                <td>{data.customer?.service_date || "~"}</td>
                                <td>
                                    {data.customer?.last_service_date ||
                                        data.customer?.service_date ||
                                        "~"}
                                </td>
                                <td>{data.lama_pengerjaan}</td>
                                <td>
                                    {data.status_id === 1 ? (
                                        <span className="bg-blue-400 px-2 rounded-md shadow-md">
                                            Proccess
                                        </span>
                                    ) : (
                                        <span className="bg-green-400 px-2 rounded-md shadow-md">
                                            Complete
                                        </span>
                                    )}
                                </td>
                                <td>
                                    <a
                                        href={"/create-invoices/" + data.id}
                                        method="get"
                                        role="button"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <BtnInvoices />
                                    </a>
                                </td>
                                {auth.user.role_id == 1 ? (
                                    <td>
                                        <div className="flex gap-1 items-center">
                                            <div>
                                                <Link
                                                    href={
                                                        "fixing/" +
                                                        data.id +
                                                        "/edit"
                                                    }
                                                    method="get"
                                                    as="button"
                                                >
                                                    <BtnEditMini />
                                                </Link>
                                            </div>

                                            <div>
                                                {data.status_id == 1 ? (
                                                    <Link
                                                        href={
                                                            "update-status/" +
                                                            data.id
                                                        }
                                                        method="PATCH"
                                                        as="button"
                                                        data={{ id: data.id }}
                                                    >
                                                        <StatusBtn />
                                                    </Link>
                                                ) : (
                                                    <div></div>
                                                )}
                                            </div>

                                            <div>
                                                <Modal
                                                    show={confirmingFixDeletion}
                                                    onClose={closeModal}
                                                >
                                                    <div className="flex justify-end items-center">
                                                        <button
                                                            className="bg-red-600 absolute top-5 right-5 py-[0.32rem] px-3 rounded-xl text-white font-bold hover:bg-red-800 transition-all ease-in-out .2s"
                                                            onClick={closeModal}
                                                        >
                                                            X
                                                        </button>
                                                    </div>
                                                    <div className="m-10">
                                                        <h2 className="text-xl font-bold text-gray-900">
                                                            Kamu Yakin Ingin
                                                            Menghapus Data Ini ?
                                                        </h2>

                                                        <p className="mt-1 text-sm text-gray-600">
                                                            Setelah data ini
                                                            dihapus, semua
                                                            sumber daya dan
                                                            datanya akan dihapus
                                                            secara permanen.
                                                            Silahkan Anda untuk
                                                            konfirmasikan bahwa
                                                            Anda ingin menghapus
                                                            data Anda secara
                                                            permanen.
                                                        </p>

                                                        <div className="mt-6 flex justify-end">
                                                            <SecondaryButton
                                                                onClick={
                                                                    closeModal
                                                                }
                                                            >
                                                                Batalkan
                                                            </SecondaryButton>
                                                            <Link
                                                                className="ml-3 btn bg-red-400 hover:bg-red-500 transition-colors ease-linear .2s"
                                                                disabled={
                                                                    processing
                                                                }
                                                                href={
                                                                    "fixing/" +
                                                                    data.id
                                                                }
                                                                method="delete"
                                                                data={{
                                                                    id: data.id,
                                                                }}
                                                                as="button"
                                                                onClick={
                                                                    TimeOut
                                                                }
                                                            >
                                                                {processing ? (
                                                                    <span className="loading loading-spinner"></span>
                                                                ) : (
                                                                    ""
                                                                )}
                                                                Konfirmasi Hapus
                                                                Data
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Modal>
                                                <button
                                                    onClick={confirmFixDeletion}
                                                >
                                                    <BtnDeleteMini />
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                ) : (
                                    <td></td>
                                )}
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
                    <th>No.Plat</th>
                    <th>Jenis Kendaraan</th>
                    <th>Warna</th>
                    <th>Kode Warna</th>
                    <th>Jenis Kerusakan</th>
                    <th>Panel</th>
                    <th>Tanggal Masuk</th>
                    <th>Tanggal Terakhir Servis</th>
                    <th>Lama Pengerjaan</th>
                    <th>Status</th>
                    <th>INV</th>
                    <th>Aksi</th>
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
                    Data Perbaikan Masih Kosong
                </span>
            </div>
        </>
    );
};

function FixingList({ datas }) {
    return datas === null ? notData() : isFixing(datas.data);
}

export default FixingList;
