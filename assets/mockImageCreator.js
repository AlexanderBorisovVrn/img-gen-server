import fetch from "node-fetch";
const url = new URL('https://picsum.photos/512/512')

export const mockImageCreator = async ()=>{
  const response = await fetch(url);
  const buf = new Buffer.from(response.url,'utf-8')
  return buf.toString('base64')
}
