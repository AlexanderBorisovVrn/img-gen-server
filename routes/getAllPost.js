import { Post } from "../db/Model.js";


export const getAllPost = async (request,reply)=>{
    try {
        const posts = await Post.find({});
        reply.status(200).send({data:posts})
    } catch (error) {
        reply.status(500).send(error)
    }
}