import { connectDB } from "../../../../util/database"
import { ObjectId } from "mongodb"

export default async function Edit(props) {
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({
        _id: new
            ObjectId(props.params.id)
    })
    // console.log(props.params)
    //console.log(result)
    return (

        <div className="p-20">
            <h4>글 수정하기</h4>
            <form action="/api/post/edit" method="POST">
                <input name="_id" defaultValue={props.params.id} style={{ display: "none" }} readOnly />
                글 제목<input name="title" placeholder={`${result.title}`} defaultValue={result.title} />
                글 내용<input name="content" placeholder={`${result.content}`} defaultValue={result.content}/>
                <button type="submit">전송</button>
            </form>
        </div>


    )
}