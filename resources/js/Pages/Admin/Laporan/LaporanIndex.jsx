import Navbar from "@/Components/Navbar";
import ReportComponentIndex from "@/Components/ReportComponent/ReportComponentIndex";
import { Head, useForm } from "@inertiajs/react";

const LaporanIndex = (fix) => {
    return (
        <>
            <Head title="LAPORAN" />
            <Navbar />
            <ReportComponentIndex fix={fix}/>
        </>
    );
};

export default LaporanIndex;
