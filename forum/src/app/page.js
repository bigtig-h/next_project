import { connectDB } from "../../util/database"

export default async function Home() {

  const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()
    
  return (
    <div>
      <h1 className='title'> 석호's Homepage </h1>
      <p className='title-sub' >by dev Hyun</p>
    </div>    
  )
}
