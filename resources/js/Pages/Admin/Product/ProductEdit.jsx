import EditProduct from '@/Components/EditProduct';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';
import React from 'react'

function ProductEdit(props) {

  return (
        <>
            <Head title='Edit Products'/>
            <Navbar />
            <div className='flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-md'>
                <h2 className='font-bold text-2xl pl-5 py-2'>Edit Products</h2>
            </div>
            <EditProduct props={props}/>
        </>
    )
}

export default ProductEdit