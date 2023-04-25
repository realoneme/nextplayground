// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import { DBURL } from '../../../utils/utils'
type Data = {
  message: string,
  data?:object
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const client = await MongoClient.connect(DBURL)
    
  if (req.method === 'POST') {
    const { username, email } = req.body;
    if (!username || !email.includes('@')) {
      res.status(422).json({ message: 'invalid information' })
    }
    const db = client.db('managers'); //database name
    await db.collection('users').insertOne({ username, email });
    client.close();
    res.status(200).json({ message: 'success' })

  } else {
    const db = client.db('managers'); //database name
    const doc = await db.collection('users').find().sort({_id:-1}).toArray();
    res.status(200).json({ message: 'success',data:doc })
    client.close();
    // Handle any other HTTP method
  }


  // 
}
