import {initMongoose} from "../../lib/mongoose";
import Post from '../../models/Post'
import {unstable_getServerSession} from "next-auth";
import {authOptions} from "./auth/[...nextauth]";



export default async function handler(req, res) {
  await initMongoose();
  const session = await unstable_getServerSession(req,res,authOptions);
 

  if (req.method === 'POST') {
    const {text} = req.body;
    const post = await Post.create({
      author:session.user.id,
      text,
      
    });
   
    res.json(post);
  }
  

}