import mongoose from "mongoose";
import env from "../utils/enviroment.js";

export function dbConnect() {
    mongoose.connect(`mongodb+srv://${env.db_username}:${env.db_password}@cluster0.jsb2fkq.mongodb.net/imag-creator?retryWrites=true&w=majority`).then(cnct => {
        console.log('DB connected')
    }).catch(e=>console.log('Connection error ' + e))

}