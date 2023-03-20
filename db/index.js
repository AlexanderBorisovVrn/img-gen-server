import * as dotenv from 'dotenv';
dotenv.config({
  path: './.env'
});
import mongoose from "mongoose";
import {
  Post
} from "./Model.js";



export async function createPost(post) {
  if (mongoose.connection.readyState === 0) {
    try {
      mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.jsb2fkq.mongodb.net/imag-creator?retryWrites=true&w=majority`);
    } catch (error) {
      console.log(error)
    }
  }
  const {
    prompt,
    name,
    photo
  } = post;
  return await Post.create({
    prompt,
    name,
    photo
  })
}