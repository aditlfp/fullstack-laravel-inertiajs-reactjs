import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}>
            <div className='flex justify-start w-3/6 sm:w-[94%] ml-10 bg-yellow-400 rounded-md mb-5 shadow-md'>
            <h2 className='font-bold text-2xl pl-5 py-5'>Dashboard</h2>
        </div>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in! As {auth.user.name}</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
