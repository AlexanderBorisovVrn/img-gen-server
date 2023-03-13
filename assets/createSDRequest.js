export function createSDrequest({
  key,
  prompt,
  negative,
  width = '512',
  height = '512',
  samples = '1',
  numSteps = '20',
  seed = null,
  guidance='7.5',
  safety = 'yes',
  webhook = null,
  trackId = null
}) {
  const request = {
    key, // API Key
    prompt, // Prompt
    negative_prompt: negative, // Items you don't want in the image
    width, //Width of output image. Maximum size is 1024x768 or 768x1024 because of memory limits
    height, //Height of output image. Maximum size is 1024x768 or 768x1024 because of memory limits
    samples, //number of images you want in response 
    num_inference_steps: negative, // Number of denoising steps (minimum: 1; maximum: 50)
    seed, //Random seed. Leave blank to randomize the seed 
    guidance_scale:guidance, //Scale for classifier-free guidance (minimum: 1; maximum: 20)
    safety_checker:safety,
    webhook, //webhook to call when image generation is completed
    track_id:trackId //tracking id to track this api call
  }
  return JSON.stringify(request)
}