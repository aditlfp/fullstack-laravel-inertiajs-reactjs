import InputLabel from "./InputLabel";
import InputError from "./InputError";
import TextInput from "./TextInput";
import { Link, useForm } from "@inertiajs/react";
import PrimaryButton from "./PrimaryButton";
import { useState } from "react";

function EditCustomer({ props }) {
    const [notify, setNotify] = useState(false);
    const { data, setData, processing, post, patch, errors } = useForm({
        no_plate: props.customer.no_plate,
        nama_kendaraan: props.customer.nama_kendaraan,
        tahun_kendaraan: props.customer.tahun_kendaraan,
        model: props.customer.model,
        tahun: props.customer.tahun,
        nama_warna: props.customer.nama_warna,
        code_warna: props.customer.code_warna,
        keterangan_warna: props.customer.keterangan_warna,
        last_service_date: props.customer.last_service_date || "",
        service_date: props.customer.service_date,
        owner: props.customer.owner,
        mobile_phone: props.customer.mobile_phone,
        alamat: props.customer.alamat,
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route(`customer.update`, props.customer.id));
        setNotify(true);
    };

    return (
        <>
            <form onSubmit={submit}>
                <div className="w-full">
                    <div className="w-3/6 mx-10">
                        <InputLabel
                            htmlFor="owner"
                            value="Nama Pemilik"
                            className="required"
                        />
                        <TextInput
                            id="owner"
                            type="text"
                            name="owner"
                            value={data.owner}
                            className="mt-1 block w-full"
                            autoComplete="owner"
                            placeholder="Budi, Santo, dll"
                            isFocused={true}
                            onChange={(e) => setData("owner", e.target.value)}
                        />
                        <InputError message={errors.owner} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel
                            htmlFor="mobile_phone"
                            value="No. Hp"
                            className="required"
                        />
                        <TextInput
                            id="mobile_phone"
                            type="text"
                            name="mobile_phone"
                            value={data.mobile_phone}
                            className="mt-1 block w-full"
                            autoComplete="mobile_phone"
                            placeholder="08123456789"
                            isFocused={true}
                            onChange={(e) =>
                                setData("mobile_phone", e.target.value)
                            }
                        />
                        <InputError message={errors.mobile_phone} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel
                            htmlFor="alamat"
                            value="Alamat"
                            className="required"
                        />
                        <TextInput
                            id="alamat"
                            type="text"
                            name="alamat"
                            value={data.alamat}
                            className="mt-1 block w-full"
                            autoComplete="alamat"
                            placeholder="Alamat Lengkap"
                            isFocused={true}
                            onChange={(e) => setData("alamat", e.target.value)}
                        />
                        <InputError message={errors.alamat} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel
                            htmlFor="no_plate"
                            value="No.Plat"
                            className="required"
                        />
                        <TextInput
                            id="no_plate"
                            type="text"
                            name="no_plate"
                            value={data.no_plate}
                            className="mt-1 block w-full"
                            autoComplete="no_plate"
                            placeholder="AE121212"
                            isFocused={true}
                            onChange={(e) =>
                                setData("no_plate", e.target.value)
                            }
                        />
                        <InputError message={errors.no_plate} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <div className="flex gap-x-[10.5rem]">
                            <InputLabel
                                htmlFor="nama_kendaraan"
                                value="Nama Kendaraan"
                                className="required"
                            />
                            <InputLabel
                                htmlFor="tahun_kendaraan"
                                value="Tahun Kendaraan"
                                className="required"
                            />
                        </div>
                        <div className="flex gap-x-3">
                            <TextInput
                                id="nama_kendaraan"
                                type="text"
                                name="nama_kendaraan"
                                value={data.nama_kendaraan}
                                className="mt-1 block w-4/6"
                                autoComplete="nama_kendaraan"
                                placeholder="NMAX"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("nama_kendaraan", e.target.value)
                                }
                            />
                            <InputError message={errors.nama_kendaraan} />
                            <TextInput
                                id="tahun_kendaraan"
                                type="text"
                                name="tahun_kendaraan"
                                value={data.tahun_kendaraan}
                                className="mt-1 block w-full"
                                autoComplete="tahun_kendaraan"
                                placeholder="Tahun Kendaraan (200)"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("tahun_kendaraan", e.target.value)
                                }
                            />
                            <InputError message={errors.tahun_kendaraan} />
                        </div>
                    </div>

                    <div className="w-3/6 mx-10">
                        <div className="flex gap-x-[14.9rem]">
                            <InputLabel
                                htmlFor="model"
                                value="model"
                                className="required"
                            />
                            <InputLabel
                                htmlFor="tahun"
                                value="tahun"
                                className="required"
                            />
                        </div>
                        <div className="flex gap-x-2">
                            <select
                                className="select select-bordered w-2/5"
                                id="model"
                                name="model"
                                value={data.model}
                                autoComplete="model"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("model", e.target.value)
                                }
                            >
                                <option disabled selected defaultValue={0}>
                                    Pilih Model
                                </option>
                                <option value="suv">SUV</option>
                                <option value="sedan">SEDAN</option>
                                <option value="mini bus">MINI BUS</option>
                                <option value="truk">TRUK</option>
                                <option value="jeep">JEEP</option>
                            </select>
                            <InputError message={errors.model} />
                            <div>
                                <TextInput
                                    id="tahun"
                                    type="text"
                                    name="tahun"
                                    value={data.tahun}
                                    className="mt-1 block pr-30"
                                    autoComplete="tahun"
                                    isFocused={true}
                                    placeholder="Tahun (2000)"
                                    onChange={(e) =>
                                        setData("tahun", e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <InputError message={errors.tahun} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <div className="flex gap-x-[5.7rem]">
                            <InputLabel
                                htmlFor="nama_warna"
                                value="Nama Warna"
                                className="required"
                            />
                            <InputLabel
                                htmlFor="code_warna"
                                value="Kode Warna"
                                className="required"
                            />
                            <InputLabel
                                htmlFor="keterangan_warna"
                                value="Keterangan"
                                className="required ml-20"
                            />
                        </div>
                        <div className="flex gap-x-3">
                            <TextInput
                                id="nama_warna"
                                type="text"
                                name="nama_warna"
                                value={data.nama_warna}
                                className="mt-1 block w-4/6"
                                autoComplete="nama_warna"
                                placeholder="MERAH TUA"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("nama_warna", e.target.value)
                                }
                            />
                            <InputError message={errors.nama_warna} />
                            <TextInput
                                id="code_warna"
                                type="text"
                                name="code_warna"
                                value={data.code_warna}
                                className="mt-1 block w-full"
                                autoComplete="code_warna"
                                placeholder="#EAEAEA"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("code_warna", e.target.value)
                                }
                            />
                            <InputError message={errors.code_warna} />
                            <TextInput
                                id="keterangan_warna"
                                type="text"
                                name="keterangan_warna"
                                value={data.keterangan_warna}
                                className="mt-1 block w-full"
                                autoComplete="keterangan_warna"
                                placeholder="Keterangan...."
                                isFocused={true}
                                onChange={(e) =>
                                    setData("keterangan_warna", e.target.value)
                                }
                            />
                            <InputError message={errors.keterangan_warna} />
                        </div>
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel
                            htmlFor="last_service_date"
                            value="Tanggal Servis Terakhir"
                        />
                        <TextInput
                            id="last_service_date"
                            type="date"
                            name="last_service_date"
                            value={data.last_service_date}
                            className="mt-1 block w-full"
                            autoComplete="last_service_date"
                            isFocused={true}
                            onChange={(e) =>
                                setData("last_service_date", e.target.value)
                            }
                        />
                        <InputError message={errors.last_service_date} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel
                            htmlFor="service_date"
                            value="Tanggal Servis"
                            className="required"
                        />
                        <TextInput
                            id="service_date"
                            type="date"
                            name="service_date"
                            value={data.service_date}
                            className="mt-1 block w-full"
                            autoComplete="service_date"
                            isFocused={true}
                            onChange={(e) =>
                                setData("service_date", e.target.value)
                            }
                        />
                        <InputError message={errors.service_date} />
                    </div>
                    <div className="flex justify-center mt-5 gap-1 mr-16">
                        <Link
                            href={route("customer.index")}
                            className="btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                        >
                            Kembali
                        </Link>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            {processing ? (
                                <span className="loading loading-spinner"></span>
                            ) : (
                                ""
                            )}
                            Simpan
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </>
    );
}

export default EditCustomer;
