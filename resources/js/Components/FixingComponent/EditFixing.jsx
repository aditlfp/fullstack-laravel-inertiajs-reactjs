import InputLabel from "../InputLabel";
import InputError from "../InputError";
import TextInput from "../TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "../PrimaryButton";
import { useState } from "react";

export default function EditFixing({ props }) {
    const [notify, setNotify] = useState(false);
    const [data1, setData1] = useState({
        jenis_kerusakan1: props.fix.jenis_kerusakan,
    });

    const [data2, setData2] = useState({
        nama_panel1: props.fix.nama_panel,
    });

    const { data, setData, processing, post, patch, errors } = useForm({
        customer_id: props.fix.customer_id,
        jenis_kerusakan: data1.jenis_kerusakan1,
        nama_panel: data2.nama_panel1,
        lama_pengerjaan: props.fix.lama_pengerjaan,
        estimasi_harga: props.fix.estimasi_harga,
        catatan_customer: props.fix.catatan_customer,
        status_id: props.fix.status_id,
    });

    console.log(data);

    const handleCheckBox = (e) => {
        const { value } = e.target;

        const selectedCheckboxes = data.jenis_kerusakan;
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
        const { value } = e.target;

        const selectedCheckboxes = data.nama_panel;
        const findIdx = selectedCheckboxes.indexOf(value);

        if (findIdx > -1) {
            selectedCheckboxes.splice(findIdx, 1);
        } else {
            selectedCheckboxes.push(value);
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
        patch(route(`fixing.update`, props.fix.id));
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
                                className="select border-1 border-slate-300 w-full"
                            >
                                <option disabled>
                                    ~Pilih Pemilik Kendaraan~
                                </option>
                                {props.customer.map((cus, index) => (
                                    <option
                                        key={index}
                                        value={cus.id || ""}
                                        selected={
                                            data.customer_id == cus.id
                                                ? true
                                                : false
                                        }
                                    >
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
                                className="select border-1 border-slate-300 w-full"
                            >
                                <option disabled>~Pilih Status~</option>
                                {props.status.map((stat, index) => (
                                    <option
                                        key={index}
                                        value={stat.id || ""}
                                        selected={
                                            data.status_id == stat.id
                                                ? true
                                                : false
                                        }
                                    >
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
                                {props.jenisKerusakan?.map((fix) => {
                                    const isChecked =
                                        data1.jenis_kerusakan1.includes(
                                            fix.name
                                        );
                                    return (
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
                                                defaultChecked={isChecked}
                                                value={fix.name}
                                                onChange={handleCheckBox}
                                            />
                                        </label>
                                    );
                                })}
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
                                href={route("fixing.index")}
                                className="btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                            >
                                Kembali
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
                                Simpan
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
                                {props.panel?.map((option) => {
                                    const isChecked =
                                        data2.nama_panel1.includes(option.name);
                                    return (
                                        <label
                                            key={option.id}
                                            className="cursor-pointer label bg-yellow-500 rounded-md mb-2"
                                        >
                                            <img
                                                src={`${props.baseUrl}/image/panel/${option.name}`}
                                                alt={option.name}
                                                width="240px"
                                            />
                                            <input
                                                type="checkbox"
                                                className="checkbox border-0 ml-2"
                                                value={option.name}
                                                defaultChecked={isChecked}
                                                onChange={handleCheckBoxPanel}
                                            />
                                        </label>
                                    );
                                })}
                            </div>
                            <InputError message={errors.nama_panel} />
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
