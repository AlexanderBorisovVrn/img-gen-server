import r from 'rethinkdb';
import * as dotenv from 'dotenv';
dotenv.config();


export const connectToDb = () => {
  let connection = null
  const config = {
    db:'images',
    port:parseInt(process.env.DB_PORT)
  }
  r.connect(config, (err, con) => {
    if (err) {
      console.log(err);
    }
    connection = con;
    // if(connection.db===undefined){
    //   r.db('projects').tableCreate('images').run(connection,(err)=>console.log(err))
    // }
    console.log('connection done')
  })

}