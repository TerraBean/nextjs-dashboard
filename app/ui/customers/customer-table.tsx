import { fetchFilteredInvoices } from "@/app/lib/data";
import Image from "next/image";


export async function InvoicesTable(
    {
        query,
        currentPage
    }:{
        query: string;
        currentPage: number
    }
){
    const invoices = await fetchFilteredInvoices(query,currentPage);

    return(
        <>
            <div className="bg-gray-100 rounded-lg p-2
            mt-6">
                {
                    invoices?.map((invoice) => 
                        <div>
                            <div
                            key={invoice.id}
                            className="bg-white flex justify-between  p-4"
                            >
                                <div className="flex">
                                    <Image
                                    className="rounded-full"
                                    src={invoice.image_url}
                                    width={28}
                                    height={28}
                                    alt="image"/>
                                    <p>{invoice.name}</p>
                                </div>
                                <p className="text-xs bg-green-400 rounded-lg py-2 px-4">
                                    {invoice.status}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}