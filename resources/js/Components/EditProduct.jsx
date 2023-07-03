import InputLabel from "./InputLabel"
import InputError from "./InputError"
import TextInput from "./TextInput"
import { Link, useForm } from "@inertiajs/react"
import PrimaryButton from "./PrimaryButton"
import { useState } from "react"

const EditProduk = ({ props }) => {

    const [notify, setNotify] = useState(false);
    const { data, setData, processing, post, patch, errors } = useForm({
        name: props.product.name,
        satuan: props.product.satuan,
        stock: props.product.stock,
        description: props.product.description
    })

    const submit = (e) => {
        e.preventDefault()

        patch(route(`products.update`, props.product.id))
        setNotify(true)
    }

  return (
        <>
            <form onSubmit={submit}>
                <div className="w-full">
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='name' value='name' />
                        <TextInput 
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}/>
                        <InputError message={errors.name} />
                    </div>

                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='satuan' value='satuan' />
                        <TextInput 
                                id="satuan"
                                type="text"
                                name="satuan"
                                value={data.satuan}
                                className="mt-1 block w-full"
                                autoComplete="satuan"
                                isFocused={true}
                                onChange={(e) => setData('satuan', e.target.value)}/>
                        <InputError message={errors.satuan} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='stock' value='stock' />
                        <TextInput 
                                id="stock"
                                type="text"
                                name="stock"
                                value={data.stock}
                                className="mt-1 block w-full"
                                autoComplete="stock"
                                isFocused={true}
                                onChange={(e) => setData('stock', e.target.value)}/>
                        <InputError message={errors.stock} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='description' value='description' />
                        <TextInput 
                                id="description"
                                type="text"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="description"
                                isFocused={true}
                                onChange={(e) => setData('description', e.target.value)}/>
                        <InputError message={errors.description} />
                    </div>
                    <div className="flex justify-center mt-5 gap-1 mr-16">
                        <Link href={route('products.index')} className='btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s'>Back</Link>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>                
                </div>
            </form>
        </>
    )
}

export default EditProduk