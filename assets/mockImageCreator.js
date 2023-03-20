import { Buffer } from 'buffer';
import fetch from "node-fetch";
const url = new URL('https://picsum.photos/512/512')

export const mockImageCreator = async () => {
  const response = await fetch(url);
  const img = await (await fetch(response.url)).arrayBuffer();
  const buf = Buffer.from(img, 'utf-8').toString('base64')
  return buf;
}


mockImageCreator();