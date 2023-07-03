
import CreateProduct from "@/Components/CreateProduct"
import Navbar from "@/Components/Navbar"
import { Head } from "@inertiajs/react"


const ProductCreate = () => {
  return (
        <>
            <Head title="Create New Product" />
            <Navbar />
            <div className='flex justify-start w-3/6 ml-10 bg-yellow-400 rounded-md mb-5 shadow-md'>
                <h2 className='font-bold text-2xl pl-5 py-2'>Create New Products</h2>
            </div>
            <CreateProduct />
        </>
    )
}

export default ProductCreate