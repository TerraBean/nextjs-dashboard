'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";



useSearchParams
export default function Page({searchParams}:{
    searchParams?:{
        query?:string;
        current?:string;
    }
}){

    const searchParameters = useSearchParams()
    const pathName = usePathname()
    const {replace}= useRouter()

    function handleChange(term:string){
        const params = new URLSearchParams(searchParameters)
        if(term){
            params.set('query',term)
            params.set('current','customer')
        }else{
            params.delete('query')
            params.delete('current')
        }
        replace(`${pathName}?${params.toString()}`)
    }
    return (
        <>
            <input type="text" onChange={(e)=>{
                handleChange(e.target.value)
            }} />
        </>
    )
}