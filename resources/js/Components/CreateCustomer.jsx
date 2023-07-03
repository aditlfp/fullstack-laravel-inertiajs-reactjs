import InputLabel from "./InputLabel"
import InputError from "./InputError"
import TextInput from "./TextInput"
import { Link, useForm } from "@inertiajs/react"
import PrimaryButton from "./PrimaryButton"
import { useState } from "react"

export default function CreateCustomer({ props }) {

    // console.log('props:', props);

    const [notify, setNotify] = useState(false);
    const { data, setData, processing, post, errors } = useForm({
        no_plate: '',
        model: '',
        last_service_date: '',
        service_date: '',
        owner: '',
        mobile_phone: '',
        birthday: '',
        description: '',
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('customer.store'))
        setNotify(true)
    }

  return (
        <>
            <form onSubmit={submit}>
                <div className="w-full">
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='no_plate' value='No.Plate' />
                        <TextInput 
                                id="no_plate"
                                type="text"
                                name="no_plate"
                                value={data.no_plate}
                                className="mt-1 block w-full"
                                autoComplete="no_plate"
                                isFocused={true}
                                onChange={(e) => setData('no_plate', e.target.value)}/>
                        <InputError message={errors.no_plate} />
                    </div>

                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='model' value='model' />
                        <TextInput 
                                id="satuan"
                                type="text"
                                name="model"
                                value={data.model}
                                className="mt-1 block w-full"
                                autoComplete="model"
                                isFocused={true}
                                onChange={(e) => setData('model', e.target.value)}/>
                        <InputError message={errors.model} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='last_service_date' value='Last Service Date' />
                        <TextInput 
                                id="last_service_date"
                                type="text"
                                name="last_service_date"
                                value={data.last_service_date}
                                className="mt-1 block w-full"
                                autoComplete="last_service_date"
                                isFocused={true}
                                onChange={(e) => setData('last_service_date', e.target.value)}/>
                        <InputError message={errors.last_service_date} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='service_date' value='Service Date' />
                        <TextInput 
                                id="service_date"
                                type="date"
                                name="service_date"
                                value={data.service_date}
                                className="mt-1 block w-full"
                                autoComplete="service_date"
                                isFocused={true}
                                onChange={(e) => setData('service_date', e.target.value)}/>
                        <InputError message={errors.service_date} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='owner' value='owner' />
                        <TextInput 
                                id="owner"
                                type="text"
                                name="owner"
                                value={data.owner}
                                className="mt-1 block w-full"
                                autoComplete="owner"
                                isFocused={true}
                                onChange={(e) => setData('owner', e.target.value)}/>
                        <InputError message={errors.owner} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='mobile_phone' value='mobile phone' />
                        <TextInput 
                                id="mobile_phone"
                                type="text"
                                name="mobile_phone"
                                value={data.mobile_phone}
                                className="mt-1 block w-full"
                                autoComplete="mobile_phone"
                                isFocused={true}
                                onChange={(e) => setData('mobile_phone', e.target.value)}/>
                        <InputError message={errors.mobile_phone} />
                    </div>
                    <div className="w-3/6 mx-10">
                        <InputLabel htmlFor='birthday' value='birthday' />
                        <TextInput 
                                id="birthday"
                                type="date"
                                name="birthday"
                                value={data.birthday}
                                className="mt-1 block w-full"
                                autoComplete="birthday"
                                isFocused={true}
                                onChange={(e) => setData('birthday', e.target.value)}/>
                        <InputError message={errors.birthday} />
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
                        <Link href={route('customer.index')} className='btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s'>Back</Link>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Save
                        </PrimaryButton>
                    </div>                
                </div>
            </form>
        </>
    )
}