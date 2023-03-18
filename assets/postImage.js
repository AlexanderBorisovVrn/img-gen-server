import  {v2 as cloudinary} from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:CLOUDINARY_SECRET_KEY
})


export const postImage = async(request,reply)=>{
    const {photo,prompt,name} = request.body;
    const photoURL = await cloudinary.uploader.upload(photo);

}