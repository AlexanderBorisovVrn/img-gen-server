import fastify from 'fastify';
import cors from '@fastify/cors'
import { postImage } from './assets/postImage.js';
import env from './utils/enviroment.js';
import { dbConnect } from './db/dbConnect.js';
import {
  createImg
} from './assets/createImg.js'

import { mockImageCreator } from './assets/mockImageCreator.js';

const server = fastify({
  logger: true
});
const coreOptions = {
  origin: false,
  methods: ["POST"],
}
server.register(cors, {})
let port = parseInt(env.port, 10);


//get all posts
server.get('/', async (request, reply) => {
})

//create post
server.post('/', postImage)

// create image
server.post('/creation', async (request, reply) => {
  const params = JSON.parse(request.body);
  // return await createImg(params);
  return await mockImageCreator();

  // try {
  //   const response = await createImg(params);
  //   reply.send(response.data.data[0].b64_json);
  // } catch (error) {
  //   console.log('error is in index.js ' + error);
  // }
})


// Run the server!
const start = async () => {
  try {
    dbConnect();
    await server.listen({
      port
    });
    console.log("server started on " + port + ' port')
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
start()