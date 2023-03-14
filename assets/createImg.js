import * as dotenv from 'dotenv';
dotenv.config()
import { OpenAIApi, Configuration } from "openai";
const configuration = new Configuration({
  apiKey: process.env.AI_KEY,
});

const openai = new OpenAIApi(configuration);


export async function createImg(params) {
  const { prompt, imgCount, size } = params;
  try {
    const response = await openai.createImage({
      prompt,
      n: imgCount,
      size,
      response_format: 'b64_json'
    });
    return response

  } catch (error) {
    console.log('error is in createImg ' + error)
  }
}