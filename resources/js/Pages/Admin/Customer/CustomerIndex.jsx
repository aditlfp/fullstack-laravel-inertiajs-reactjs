import BtnDeleteMini from '@/Components/BtnDeleteMini'
import BtnEditMini from '@/Components/BtnEditMini'
import Navbar from '@/Components/Navbar'
import { Head, Link } from '@inertiajs/react'
import React, { useState } from 'react'

const CustomerIndex = (props) => {

    // console.log('props:', customer);

    return (
        <>
        <Head title='Customer' />
        <Navbar />
            <div>
            <div className='flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-md'>
                <h2 className='font-bold text-2xl pl-5 py-2'>Customer List</h2>
            </div>
            <div className='ml-10'>
                {props.flash.message != null && <div className="alert alert-success w-3/6 sm:w-[94%] mb-5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{props.flash.message}</span>
                </div>
                }
            </div>
                <div className="overflow-x-auto mx-10 rounded-md shadow-md">
                    <table className="table table-zebra table-xs">
                        <thead>
                        <tr className='bg-slate-100'>
                            <th>#</th> 
                            <th>No. Plate</th> 
                            <th>Model</th> 
                            <th>Owner</th> 
                            <th>Mobile Phone</th> 
                            <th>Birthday</th> 
                            <th>Last Service Date</th> 
                            <th>Service Date</th> 
                            <th>Description</th> 
                            <th>Action</th> 
                        </tr>
                        </thead> 
                        <tbody>
                        {props.customer ? props.customer.map((data, i) => {
                            return (
                                <tr key={data.id}>
                                    <th>{ i+1 }</th> 
                                    <td>{data.no_plate}</td> 
                                    <td>{data.model}</td> 
                                    <td>{data.owner}</td> 
                                    <td>{data.mobile_phone}</td> 
                                    <td>{data.birthday}</td> 
                                    <td>{data.last_service_date}</td> 
                                    <td>{data.service_date}</td> 
                                    <td>{data.description}</td>
                                    <td className='flex gap-1'>
                                        <Link href={'customer/'+ data.id + '/edit'} method='get' as='button'><BtnEditMini /></Link>

                                        <Link href={'customer/'+ data.id} method='delete' data={{ id: data.id}} as='button'><BtnDeleteMini /></Link>
                                    </td> 
                                </tr>
                                )
                            }): <th><tr colspan="6" className='text-center'>Customer Masih Kosong</tr></th>
                        }
                    
                        </tbody> 
                        <tfoot>
                        <tr className='bg-slate-100'>
                            <th>#</th> 
                            <th>No. Plate</th> 
                            <th>Model</th> 
                            <th>Owner</th> 
                            <th>Mobile Phone</th> 
                            <th>Birthday</th> 
                            <th>Last Service Date</th> 
                            <th>Service Date</th> 
                            <th>Description</th> 
                            <th>Action</th> 
                        </tr>
                        </tfoot>
                    </table>
                    </div>
                    <div className='flex justify-end mr-10 mt-5 gap-1'>
                        <Link href={route('dashboard')} className='btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s' >Back</Link>
                        <Link href={route('customer.create')} className='btn btn-warning hover:bg-yellow-600 shadow-md hover:shadow-none transition-all ease-linear .2s' >Create Products</Link>
                    </div>
                </div>
        </>
    )
}

export default CustomerIndex