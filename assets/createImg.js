import enviroment from "../utils/enviroment.js";
import { OpenAIApi, Configuration } from "openai";
import mockImageCreator from './mockImageCreator.js'
const configuration = new Configuration({
  apiKey: enviroment.ai_key,
});

const openai = new OpenAIApi(configuration);


export async function createImg(request, reply) {
  const { prompt, imgCount, size } = request.body;
  try {
    const response = await openai.createImage({
      prompt,
      n: imgCount,
      size,
      response_format: 'b64_json'
    });
    //   reply.send(response.data.data[0].b64_json);
    return await mockImageCreator();
  }
  catch (error) {
    console.log('error is in createImg ' + error)
  }
}