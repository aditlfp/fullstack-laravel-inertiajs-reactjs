import { FormatRupiah } from "@arismun/format-rupiah";
import { useForm } from "@inertiajs/react";

function ReportComponentIndex({ fix }) {
    const { data, setData, post, get } = useForm({
        month: "",
    });

    const submit = (e) => {
        e.preventDefault();

        const formatedDate = data.month + "-01";
        window.open("report-month/" + formatedDate, "_blank");
    };
    return (
        <>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center">
                    <h2 className="bg-yellow-400 w-[23%] mx-7 px-7 rounded-tl-xl rounded-br-xl font-semibold shadow-md">
                        Data Perbaikan Yang Telah Selesai !
                    </h2>
                    <form onSubmit={submit}>
                        <div className="join">
                            <input
                                type="month"
                                className="input input-bordered join-item"
                                onChange={(e) =>
                                    setData("month", e.target.value)
                                }
                            />
                            <button
                                type="submit"
                                className="btn btn-warning mr-5 shadow-md join-item"
                            >
                                Download PDF
                            </button>
                        </div>
                    </form>
                </div>
                <div className="mx-7 my-2">
                    <table className="table table-xs table-zebra shadow-md rounded-none">
                        <thead>
                            <tr className="bg-gray-100">
                                <th>No.</th>
                                <th>Nama Pemilik</th>
                                <th>Kendaraan</th>
                                <th>No.Plat</th>
                                <th>Model</th>
                                <th>Tahun Model</th>
                                <th>Jenis Kerusakan</th>
                                <th>Lama Pengerjaan</th>
                                <th>Estimasi Harga</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fix.fix ? (
                                fix.fix.map((data, i) => (
                                    <tr key={i}>
                                        {data.status_id == 2 ? (
                                            <>
                                                <td>{i + 1}</td>
                                                <td>{data.customer.owner}</td>
                                                <td>
                                                    {
                                                        data.customer
                                                            .nama_kendaraan
                                                    }
                                                </td>
                                                <td>
                                                    {data.customer.no_plate}
                                                </td>
                                                <td>{data.customer.model}</td>
                                                <td>{data.customer.tahun}</td>
                                                <td>
                                                    {data.jenis_kerusakan + ","}
                                                </td>
                                                <td>{data.lama_pengerjaan}</td>
                                                <td>
                                                    <FormatRupiah
                                                        value={
                                                            data.estimasi_harga
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <span className="bg-green-500 px-2 pb-[2.45px] rounded-full">
                                                        {data.status.name}
                                                    </span>
                                                </td>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <td colSpan="10" className="text-center">
                                    <span>~Kosong~</span>
                                </td>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="overflow-x-auto my-20">
                <h2 className="bg-orange-400 w-[23.5%] mx-7 px-7 rounded-tl-xl rounded-br-xl font-semibold shadow-md">
                    Data Perbaikan Yang Belum Selesai !
                </h2>
                <div className="mx-7 my-2">
                    <table className="table table-xs table-zebra shadow-md rounded-none">
                        <thead>
                            <tr className="bg-gray-100">
                                <th>No.</th>
                                <th>Nama Pemilik</th>
                                <th>Kendaraan</th>
                                <th>No.Plat</th>
                                <th>Model</th>
                                <th>Tahun Model</th>
                                <th>Jenis Kerusakan</th>
                                <th>Lama Pengerjaan</th>
                                <th>Estimasi Harga</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fix.fix ? (
                                fix.fix.map((data, i) => (
                                    <tr key={i}>
                                        {data.status_id == 1 ? (
                                            <>
                                                <td>{i - 1}</td>
                                                <td>{data.customer.owner}</td>
                                                <td>
                                                    {
                                                        data.customer
                                                            .nama_kendaraan
                                                    }
                                                </td>
                                                <td>
                                                    {data.customer.no_plate}
                                                </td>
                                                <td>{data.customer.model}</td>
                                                <td>{data.customer.tahun}</td>
                                                <td>
                                                    {data.jenis_kerusakan + ","}
                                                </td>
                                                <td>{data.lama_pengerjaan}</td>
                                                <td>
                                                    <FormatRupiah
                                                        value={
                                                            data.estimasi_harga
                                                        }
                                                    />
                                                </td>
                                                <td>
                                                    <span className="bg-sky-500 px-2 pb-[2.45px] rounded-full">
                                                        {data.status.name}
                                                    </span>
                                                </td>
                                            </>
                                        ) : (
                                            ""
                                        )}
                                    </tr>
                                ))
                            ) : (
                                <td colSpan="10" className="text-center">
                                    <span>~Kosong~</span>
                                </td>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ReportComponentIndex;
