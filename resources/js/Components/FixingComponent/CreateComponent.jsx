import InputLabel from "../InputLabel";
import InputError from "../InputError";
import TextInput from "../TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";

export default function CreateExitsCustomer({ datas }) {
    const baseUrl = datas.baseUrl || "";
    const [notify, setNotify] = useState(false);
    const [data1, setData1] = useState({
        jenis_kerusakan1: [],
    });

    const [data2, setData2] = useState({
        nama_panel1: [],
    });
    // console.log();
    const { data, setData, processing, post, patch, errors } = useForm({
        id: "",
        customer_id: "",
        jenis_kerusakan: data1.jenis_kerusakan1,
        jenis_kerusakan1: [],
        nama_panel1: [],
        nama_panel: data2.nama_panel1,
        lama_pengerjaan: "",
        estimasi_harga: "",
        catatan_customer: "",
        status_id: "",
    });

    const handleCheckBox = (e) => {
        const { value } = e.target;

        const selectedCheckboxes = data1.jenis_kerusakan1;
        const findIdx = selectedCheckboxes.indexOf(value);

        if (findIdx > -1) {
            selectedCheckboxes.splice(findIdx, 1);
        } else {
            selectedCheckboxes.push(value);
        }

        setData1({
            jenis_kerusakan1: selectedCheckboxes,
        });
    };

    const handleCheckBoxPanel = (e) => {
        const { value, checked } = e.target;

        const selectedCheckboxes = data2.nama_panel1;

        if (checked) {
            selectedCheckboxes.push(value);
        } else {
            setData(
                "nama_panel1",
                data1.nama_panel1.filter((item) => {
                    return item !== value;
                })
            );
        }

        setData2({
            nama_panel1: selectedCheckboxes,
        });
    };

    const price = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        value: "1",
    }).format(data.estimasi_harga);

    const submit = (e) => {
        e.preventDefault();
        post(route("fixing.store"));
        setNotify(true);
    };
    return (
        <>
            <form onSubmit={submit}>
                <div className="flex">
                    <div className="w-[70%]">
                        <div className="w-3/6 mx-10">
                            <div className="flex justify-between gap-2 mb-2">
                                <InputLabel
                                    htmlFor="customer_id"
                                    value="Nama Pemilik Kendaraan"
                                    className="required"
                                />
                                <span className="indicator-item indicator-middle indicator-center badge badge-info">
                                    Proses
                                </span>
                            </div>
                            <select
                                onChange={(e) =>
                                    setData("customer_id", e.target.value)
                                }
                                name="customer_id"
                                id="customer_id"
                                defaultValue="0"
                                className="select border-1 border-slate-300 w-full"
                            >
                                <option disabled value="0">
                                    ~Pilih Pemilik Kendaraan~
                                </option>
                                {datas.customer.map((cus, index) => (
                                    <option key={index} value={cus.id || ""}>
                                        {cus.owner || ""}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.owner} />
                        </div>
                        <input
                            className="hidden"
                            type="text"
                            value={data1.jenis_kerusakan1 || ""}
                            onChange={(e) =>
                                setData("jenis_kerusakan", e.target.value)
                            }
                        />
                        <div className="w-3/6 mx-10">
                            <InputLabel
                                htmlFor="status_id"
                                value="Status"
                                className="required"
                            />
                            <select
                                onChange={(e) =>
                                    setData("status_id", e.target.value)
                                }
                                name="status_id"
                                id="status_id"
                                defaultValue="0"
                                className="select border-1 border-slate-300 w-full"
                            >
                                <option disabled value="0">
                                    ~Pilih Status~
                                </option>
                                {datas.status.map((stat, index) => (
                                    <option key={index} value={stat.id || ""}>
                                        {stat.name}
                                    </option>
                                ))}
                            </select>
                            <InputError message={errors.status_id} />
                        </div>
                        <div className="w-3/6 mx-10">
                            <InputLabel
                                htmlFor="jenis_kerusakan"
                                value="Jenis Kerusakan"
                                className="required"
                            />
                            <div className="form-control">
                                {datas.jenisKerusakan?.map((fix) => (
                                    <label
                                        key={fix.id}
                                        className="cursor-pointer label bg-yellow-500 rounded-md mb-2"
                                    >
                                        <span className="label-text ml-2 text-white">
                                            {fix.name}
                                        </span>
                                        <input
                                            type="checkbox"
                                            className="checkbox border-0"
                                            value={fix.name}
                                            onChange={handleCheckBox}
                                        />
                                    </label>
                                ))}
                            </div>
                            <InputError message={errors.jenis_kerusakan} />
                        </div>
                        <div className="w-3/6 mx-10">
                            <InputLabel
                                htmlFor="lama_pengerjaan"
                                value="Lama Pengerjaan"
                                className="required"
                            />
                            <TextInput
                                id="lama_pengerjaan"
                                type="text"
                                name="lama_pengerjaan"
                                value={data.lama_pengerjaan}
                                className="mt-1 block w-full"
                                autoComplete="lama_pengerjaan"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("lama_pengerjaan", e.target.value)
                                }
                            />
                            <InputError message={errors.lama_pengerjaan} />
                        </div>
                        <div className="w-3/6 mx-10">
                            <InputLabel
                                htmlFor="estimasi_harga"
                                value="Estimasi Harga"
                                className="required"
                            />
                            <div className="flex">
                                <input
                                    type="text"
                                    className="rounded-tl-md rounded-bl-md input-bordered bg-gray-200 border-r-0 w-1/6"
                                    value="Rp."
                                    readOnly
                                />
                                <TextInput
                                    id="estimasi_harga"
                                    type="text"
                                    name="estimasi_harga"
                                    value={data.estimasi_harga}
                                    className="mt-1 block w-full"
                                    autoComplete="estimasi_harga"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData(
                                            "estimasi_harga",
                                            e.target.value
                                        )
                                    }
                                />
                                <input
                                    type="text"
                                    value={price || ""}
                                    className="rounded-md ml-3 input-bordered bg-gray-200 border-r-0"
                                />
                            </div>
                            <InputError message={errors.estimasi_harga} />
                        </div>
                        <div className="w-3/6 mx-10">
                            <InputLabel
                                htmlFor="catatan_customer"
                                value="Catatan Customer"
                            />
                            <TextInput
                                id="catatan_customer"
                                type="text"
                                name="catatan_customer"
                                value={data.catatan_customer}
                                className="mt-1 block w-full"
                                autoComplete="catatan_customer"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("catatan_customer", e.target.value)
                                }
                            />
                            <InputError message={errors.catatan_customer} />
                        </div>
                        <div className="flex justify-center mt-5 gap-1 mr-16">
                            <Link
                                href={route("customer.index")}
                                className="btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                            >
                                Back
                            </Link>
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                {processing ? (
                                    <span className="loading loading-spinner"></span>
                                ) : (
                                    ""
                                )}
                                Save
                            </PrimaryButton>
                        </div>
                    </div>
                    <div>
                        <div className="w-full">
                            <InputLabel
                                htmlFor="nama_panel"
                                value="Nama Panel"
                                className="required"
                            />
                            <div className="form-control">
                                {datas.panel?.map((option) => (
                                    <label
                                        key={option.id}
                                        className="cursor-pointer label bg-yellow-500 rounded-md mb-2"
                                    >
                                        <img
                                            src={`${baseUrl}/image/panel/${option.name}`}
                                            alt={option.name}
                                            width="240px"
                                        />
                                        <input
                                            type="checkbox"
                                            className="checkbox border-0 ml-2"
                                            value={option.name}
                                            onChange={handleCheckBoxPanel}
                                        />
                                    </label>
                                ))}
                            </div>
                            <InputError message={errors.nama_panel} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
