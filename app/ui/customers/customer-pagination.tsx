import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";



export default function CustomerPagination(){
    const searchParameters = useSearchParams()
    const pathName = usePathname()
    const {replace}= useRouter()
    const currentPage = Number(searchParameters.get('page')) || 1

    const createPageURL = (pageNumber: string | number) => {
        const params = new URLSearchParams(searchParameters);
        params.set('page',pageNumber.toString())
        return `${pathName}?${params.toString()}`
    }
    return(
        <div className="inline-flex mt-6">
        <PaginationArrow 
            direction="left"
            isDisabled = {currentPage <= 1}
            href={createPageURL(currentPage - 1)}
        />
        <PaginationArrow
            direction="right"
            isDisabled = {currentPage >= 15}
            href={createPageURL(currentPage + 1)}
        />
    </div>
    )
}

function PaginationArrow({
    href,
    isDisabled,
    direction
}:{
    href: string;
    direction: 'left' | 'right';
    isDisabled?: boolean
}){
    const className = clsx(
        'flex h-10 w-10 justify-center items-center rounded-md border',
    {
        'pointer-events-none text-grey-300': isDisabled,
        'hover:bg-grey-100':!isDisabled,
        'mr-2': direction == 'left',
        'ml-2': direction == 'right'
    }
    )

    const icon = 
    direction === 'right' ? (<ArrowRightIcon className="w-4"/>):
    (<ArrowLeftIcon className="w-4" />)

    return isDisabled ? 
    <div className={className}>{icon}</div>:
    <Link
    href={href}
    className={className}
    >
        <div>{icon}</div>
    </Link>
    
}