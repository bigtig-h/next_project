'use client'
import { useRouter } from "next/navigation"

export default function DetailLink(test){
    let router = useRouter();
    return (
        <button onClick={()=>{router.back()}}>수정</button>
    )
}