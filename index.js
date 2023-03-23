import fastify from 'fastify';
import cors from '@fastify/cors'
import { postImage } from './assets/postImage.js';
import env from './utils/enviroment.js';
import { dbConnect } from './db/dbConnect.js';
import {
  createImg
} from './assets/createImg.js'


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
server.post('/creation', createImg)


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