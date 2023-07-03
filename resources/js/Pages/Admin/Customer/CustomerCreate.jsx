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
            <h2 className='font-bold text-2xl pl-5 py-2'>Create New Customer</h2>
        </div>
        <CreateCustomer props={customer}/>
    </>
    )
}

export default CustomerCreate