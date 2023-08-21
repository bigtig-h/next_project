import { connectDB } from "../../../../util/database"
import { ObjectId } from "mongodb"

export default async function handler(req, res){
    const client = await connectDB;
    const db = client.db("forum");
    var filter = {};
    const options = {upsert: true};

    console.log(req.body)

    
    if(req.method === 'POST'){
        if(req.body.title === '' || req.body.content === '')
        {
            return res.status(500).json('제목, 내용을 입력해 주세요.')
            
        }
        try{
            filter ={_id: new ObjectId(req.body._id)};
            var updateDoc = {
                $set: {
                    title: req.body.title,
                    content: req.body.content
                },
            };
            await db.collection('post').updateOne(filter, updateDoc,options);
            return res.status(200).redirect(302, '/list')
        }
        catch(err){
            console.log(err);
            return res.status(400).json('DB err');
        }
    }
    else{
        return res.status(200).json("try again")
    }


}