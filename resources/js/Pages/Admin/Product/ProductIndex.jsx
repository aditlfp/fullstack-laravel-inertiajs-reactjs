import BtnDeleteMini from "@/Components/BtnDeleteMini";
import BtnEditMini from "@/Components/BtnEditMini";
import CopyrightComponent from "@/Components/CopyrightComponent";
import CreateProduct from "@/Components/CreateProduct";
import Navbar from "@/Components/Navbar";
import Paginator from "@/Components/Paginator/Paginator";
import ProductList from "@/Components/ProductList";
import { Head, Link } from "@inertiajs/react";
import React, { useState } from "react";

const ProductIndex = (props) => {
    return (
        <>
            <Head title="Product" />
            <Navbar />
            <div>
                <div className="flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-md">
                    <h2 className="font-bold text-2xl pl-5 py-2">
                        Products List
                    </h2>
                </div>
                <div className="ml-10">
                    {props.flash.message != null && (
                        <div className="alert alert-success w-3/6 sm:w-[94%] mb-5">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="stroke-current shrink-0 h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <span>{props.flash.message}</span>
                        </div>
                    )}
                </div>
                <div className="overflow-x-auto mx-10 rounded-md shadow-md">
                    <ProductList datas={props.product} />
                </div>
                <div className="flex justify-center items-center mt-3">
                    <Paginator meta={props.product.meta} />
                </div>
                <div className="flex justify-end mr-10 mt-2 gap-1">
                    <Link
                        href={route("dashboard")}
                        className="btn btn-error hover:bg-red-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                    >
                        Back
                    </Link>
                    <Link
                        href={route("products.create")}
                        className="btn btn-warning hover:bg-yellow-600 shadow-md hover:shadow-none transition-all ease-linear .2s"
                    >
                        Create Products
                    </Link>
                </div>
            </div>
            <CopyrightComponent />
        </>
    );
};

export default ProductIndex;
