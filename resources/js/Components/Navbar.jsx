import { Link, usePage } from "@inertiajs/react";

const Navbar = () => {
    const { auth } = usePage().props;

    return (
        <>
            <div className="navbar shadow-inner shadow-gray-400 bg-base-300 mb-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href={route("dashboard")}>Dashboard</Link>
                            </li>
                            {auth.user.role_id == 1 ? (
                                <li>
                                    <Link href={route("customer.index")}>
                                        Customer
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href={route("customers.index")}>
                                        Customer
                                    </Link>
                                </li>
                            )}
                            {auth.user.role_id == 1 ? (
                                <li>
                                    <Link href={route("fixing.index")}>
                                        Perbaikan
                                    </Link>
                                </li>
                            ) : (
                                <li>
                                    <Link href={route("fixings.index")}>
                                        Perbaikan
                                    </Link>
                                </li>
                            )}
                            {auth.user.role_id == 1 ? (
                                <li>
                                    <Link href={route("laporan.index")}>
                                        Laporan
                                    </Link>
                                </li>
                            ) : (
                                ""
                            )}
                            <li>
                                <Link
                                    href={route("logout")}
                                    method="POST"
                                    as="button"
                                >
                                    <span className="bg-red-500 rounded-md px-2 py-2 text-white font-bold">
                                        Logout
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center bg-yellow-500 rounded-xl shadow-inner shadow-yellow-600">
                    <a className="btn btn-ghost shadow-inner shadow-yellow-600 normal-case text-xl">
                        BENGKEL AKM - AUTO PARTS
                    </a>
                </div>
                <div className="navbar-end"></div>
            </div>
        </>
    );
};

export default Navbar;
