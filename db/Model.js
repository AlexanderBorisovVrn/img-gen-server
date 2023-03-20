import { Schema,model } from "mongoose";

const postSchema = new Schema({
  photo:String,
  prompt:String,
  name:String
},{timestamps:true})

export const Post = model('Post',postSchema)