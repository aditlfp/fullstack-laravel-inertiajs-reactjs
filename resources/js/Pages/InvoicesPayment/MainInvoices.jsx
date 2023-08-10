import FinalInvoices from "@/Components/Invoices/FinalInvoices";
import { Head } from "@inertiajs/react";

function MainInvoices(props) {
    return (
        <>
            <Head title="Invoices" />
            <FinalInvoices props={props} />
        </>
    );
}

export default MainInvoices;
