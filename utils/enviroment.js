import * as dotenv from 'dotenv';
dotenv.config();

export default {
    ai_key:process.env.AI_KEY,
    port:process.env.PORT,
    cloudinary_secret_key:process.env.CLOUDINARY_SECRET_KEY,
    cloudinary_api_key:process.env.CLOUDINARY_API_KEY,
    cloudinary_name:process.env.CLOUDINARY_NAME,
    db_username:process.env.DB_USERNAME,
    db_password:process.env.DB_PASSWORD,
}