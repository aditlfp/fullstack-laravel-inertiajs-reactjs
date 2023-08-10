import CopyrightComponent from '@/Components/CopyrightComponent'
import EditCustomer from '@/Components/EditCustomer'
import Navbar from '@/Components/Navbar'
import { Head } from '@inertiajs/react'
import React from 'react'

const CustomerEdit = (props) => {
  return (
    <>
        <Head title='Edit Customer'/>
        <Navbar />
        <div className='flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-md'>
            <h2 className='font-bold text-2xl pl-5 py-2'>Edit Customer</h2>
        </div>
        <EditCustomer props={props} />
        <CopyrightComponent />
    </>
  )
}

export default CustomerEdit