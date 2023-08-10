import CopyrightComponent from '@/Components/CopyrightComponent'
import CreateCustomer from '@/Components/CreateCustomer'
import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

const CustomerCreate = ({ customer }) => {
  return (
    <>
        <Head title='Create Customer'/>
        <Navbar />
        <div className='flex justify-start w-3/6 ml-10 bg-yellow-400 rounded-md mb-5 shadow-md'>
            <h2 className='font-bold text-2xl pl-5 py-2'>Tambah Customer Baru +</h2>
        </div>
        <CreateCustomer props={customer}/>
        <div className='mt-5' />
        <CopyrightComponent />
    </>
    )
}

export default CustomerCreate