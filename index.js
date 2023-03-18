import fastify from 'fastify';
import cors from '@fastify/cors'
import * as dotenv from 'dotenv';
dotenv.config();
import {
  connectToDb
} from './db/index.js';
import {
  createImg
} from './assets/createImg.js'
import { mockImageCreator } from './assets/mockImageCreator.js';

const server = fastify({
  logger: true
});
const coreOpt = {
  origin: false,
  methods: ["POST"],
}
server.register(cors, {})
let port = parseInt(process.env.PORT, 10);

// Declare a route
server.get('/', async (request, reply) => {
  return "CREATED"
})

//get all posts
server.get('/',async(request,reply)=>{

})

//create post
server.post('/',async(request,reply)=>{

})

// create image
server.post('/creation', async (request, reply) => {
  const params = JSON.parse(request.body);
<<<<<<< HEAD
  // return await createImg(params);
  return await mockImageCreator();
 })
=======
  try {
    const response = await createImg(params);
    reply.send(response.data.data[0].b64_json);
  } catch (error) {
    console.log('error is in index.js ' + error);
  }
})

>>>>>>> be9e133cbc5fbf0180dc8c5b2d192f51b60adddd

// Run the server!
const start = async () => {
  try {
    await server.listen({
      port
    });
    console.log("server started on " + port + ' port')
  } catch (err) {
    process.exit(1)
  }
}
start()