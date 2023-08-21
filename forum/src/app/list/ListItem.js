'use client'

import { useEffect } from "react"
import Link from "next/link"

export default function ListItem(props) {

    // useEffect(()=>{
    //      서버에 부탁해서 DB게시물 가져옴
    //      result = DB게시물

    // },[])

    return (
        <div>
            {
                props.result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${props.result[i]._id.toString()}`}>
                                <h4>{props.result[i].title}</h4>
                                <p>{props.result[i].content}</p>
                            </Link>
                            <Link href={'/edit/' + props.result[i]._id.toString()}> ✏️ </Link>
                            <span onClick={(e) => {
                                fetch('/api/post/delete', {
                                    method: 'POST',
                                    body: props.result[i]._id
                                }).then((r) => {
                                    return r.json()
                                })
                                    .then(() => {
                                        e.target.parentElement.style.opacity = 0;
                                        setTimeout(() => {
                                            e.target.parentElement.style.display =  'none'
                                        }, 1000);
                                    })
                                // fetch(`/api/test?name=${props.result[i]._id}`)
                            }}>🗑️</span>
                            {/* <DetailLink></DetailLink> 
                            DetailLink에 관한 수업있었음.*/}
                        </div>
                    )
                }
                )
            }
        </div>
    )
}