import { v2 as cloudinary } from 'cloudinary';
import env from '../utils/enviroment.js'
import { Post } from '../db/Model.js';

cloudinary.config({
    cloud_name: env.cloudinary_name,
    api_key: env.cloudinary_api_key,
    api_secret: env.cloudinary_secret_key
})

export const postImage = async (request, reply) => {
    try {
        const { photo, prompt, name } = request.body;
        const photoURL = await cloudinary.uploader.upload(photo);
        const post = await Post.create({
            prompt,name,photo:photoURL.url
        })
    

        reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({ data: post })
    } catch (error) {
        console.log(error)
        reply.status(500).send({message: 'Unable to create a post, please try again'})
    }
}