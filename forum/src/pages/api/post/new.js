import { getServerSession } from "next-auth";
import { connectDB } from "../../../../util/database"
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res){
    const db = (await connectDB).db("forum");
    let session = await getServerSession(req, res, authOptions)
    console.log(session)
    if(session){
        req.body.author = session.user.email
    }
    
    if(req.method === 'POST'){
        if(req.body.title === '' || req.body.content === '')
        {
            return ans.status(500).json('제목, 내용을 입력해 주세요.')
            
        }
        try{

            console.log(req.body)
            await db.collection('post').insertOne(req.body);

            return res.status(200).redirect(302, '/list')
        }
        catch(err){
            return res.status(400).json('DB err');
        }
    }
    else{
        return res.status(200).json("try again")
    }


}