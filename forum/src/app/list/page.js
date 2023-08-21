
import Link from "next/link";
import { connectDB } from "../../../util/database";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";

export default async function list() {

    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    result = result.map((a)=>{
        a._id = a._id.toString()
        return a
    })
    return (
        <div className="list-bg">
            <ListItem result={result}/>
        </div>
    )
}

function noticeBoard(props) {
    return (
        <div className="list-item">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </div>
    )
}
