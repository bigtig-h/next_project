import { connectDB } from "../../../../util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    if(req.method == 'POST'){
        try{
            const db = (await connectDB).db("forum");
            let result = await db.collection('post').deleteOne({_id: new ObjectId(req.body)})
            if(result.deleteCount == 0){
                res.status(400).json('삭제실패')
            }else {
                res.status(200).json('삭제완료')
            }
        }catch(error){
            console.log(error)
        }
    }
    else{
        return res.status(200).json("try again")
    }


}