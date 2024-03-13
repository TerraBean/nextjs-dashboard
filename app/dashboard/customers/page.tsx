'use client'


import { generatePagination } from "@/app/lib/utils";
import CustomerPagination from "@/app/ui/customers/customer-pagination";
import { InvoicesTable } from "@/app/ui/customers/customer-table";
import SearchInput from "@/app/ui/search-input";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { usePathname, useRouter, useSearchParams } from "next/navigation";



useSearchParams
export default function Page({searchParams}:{
    searchParams?:{
        query?:string;
        current?:string;
    }
}){
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.current) || 1

    return (
        <>
            {/* <input type="text" onChange={(e)=>{
                handleChange(e.target.value)
            }} /> */}

            <SearchInput placeholder='Search invoices..' />
            <InvoicesTable currentPage={currentPage} query={query} />
            <CustomerPagination />
        </>
    )
}

