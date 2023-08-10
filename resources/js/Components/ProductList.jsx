import { Link } from "@inertiajs/react";
import BtnEditMini from "./BtnEditMini";
import BtnDeleteMini from "./BtnDeleteMini";

const isProduct = (datas) => {
    return (
        <table className="table table-zebra table-xs">
            <thead>
                <tr className="bg-slate-100">
                    <th>#</th>
                    <th>Name</th>
                    <th>Satuan</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {datas.data ? (
                    datas.data.map((product, i) => {
                        return (
                            <tr key={product.id}>
                                <th>{i + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.satuan}</td>
                                <td>{product.stock}</td>
                                <td>{product.description}</td>
                                <td className="flex gap-1">
                                    <Link
                                        href={
                                            "products/" + product.id + "/edit"
                                        }
                                        method="get"
                                        as="button"
                                    >
                                        <BtnEditMini />
                                    </Link>

                                    <Link
                                        href={"products/" + product.id}
                                        method="delete"
                                        data={{ id: product.id }}
                                        as="button"
                                    >
                                        <BtnDeleteMini />
                                    </Link>
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <th>
                        <tr colSpan="6" className="text-center">
                            Products Masih Kosong
                        </tr>
                    </th>
                )}
            </tbody>
            <tfoot>
                <tr className="bg-slate-100">
                    <th>#</th>
                    <th>Name</th>
                    <th>Satuan</th>
                    <th>Stock</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </tfoot>
        </table>
    );
};

const notData = () => {
    return (
        <>
            <div className="text-center my-2">
                <span className="text-center font-bold">
                    Products Masih Kosong
                </span>
            </div>
        </>
    );
};

const ProductList = ({ datas }) => {
    return !datas ? notData() : isProduct(datas);
};

export default ProductList;
