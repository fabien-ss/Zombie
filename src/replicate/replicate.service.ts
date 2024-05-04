import { Injectable } from "@nestjs/common";
import { replicate } from "../replicate/replicate";

@Injectable()
export class ReplicateService{
 
    constructor(){

    }

    // latent-consistency-model, sdxl
    async genareImage(imagePrompt: string){
        console.log(imagePrompt)
        const q = imagePrompt["prompt"]
        const output = await replicate.run(
            "luosiallen/latent-consistency-model:553803fd018b3cf875a8bc774c99da9b33f36647badfd88a6eec90d61c5f62fc",
            {
                input: {
                    width: 768,
                    height: 768,
                    prompt: q,
                    num_images: 1,
                    guidance_scale: 8,
                    num_inference_steps: 8
                }
            }
        );
        console.log(output)
        return output;
    }

    //llama-2-70b-chat
    async answerQuestion(question: string){
        const q = question["question"];
        let retour = "";
        const input = {
            top_k: 0,
            top_p: 1,
            prompt: q,
            temperature: 0.75,
            system_prompt: "Give short answer",
            length_penalty: 1,
            max_new_tokens: 800,
            prompt_template: "<s>[INST] <<SYS>>\n{system_prompt}\n<</SYS>>\n\n{prompt} [/INST]",
            presence_penalty: 0
        };
        
        for await (const event of replicate.stream("meta/llama-2-7b-chat", { input })) {
            retour += event.toString();
        };
        return retour;
    }

    //musicgen
    async generateMusic(prompt: string){
        const p = prompt["prompt"]
        console.log(prompt)
        const output = await replicate.run(
            "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
            {
                input: {
                top_k: 250,
                top_p: 0,
                prompt: p,
                duration: 8,
                temperature: 1,
                continuation: false,
                model_version: "stereo-large",
                output_format: "mp3",
                continuation_start: 0,
                multi_band_diffusion: false,
                normalization_strategy: "peak",
                classifier_free_guidance: 3
              }
            }
          );
        console.log(output);
        return output;
    }

    // styletts2
    async textToSond(prompt: string){
        const q = prompt["prompt"];
        const output = await replicate.run(
        "adirik/styletts2:989cb5ea6d2401314eb30685740cb9f6fd1c9001b8940659b406f952837ab5ac",
            {
                input: {
                beta: 0.7,
                seed: 0,
                text: q,
                alpha: 0.3,
                diffusion_steps: 10,
                embedding_scale: 1.5
                }
            }
        );
        console.log(output);
    }
    
    //sdxl-emoji
    async textToImageCartoon(prompt: string){
        const q = prompt["prompt"];
        const output = await replicate.run(
        "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e879c50ee718c5f78a9d38e04d523cc5e",
        {
            input: {
            width: 1024,
            height: 1024,
            prompt: q,
            refine: "no_refiner",
            scheduler: "K_EULER",
            lora_scale: 0.6,
            num_outputs: 1,
            guidance_scale: 7.5,
            apply_watermark: false,
            high_noise_frac: 0.8,
            negative_prompt: "",
            prompt_strength: 0.8,
            num_inference_steps: 50
            }
        }
        );
        console.log(output);
        return output;
    }

    //salesforce/blip
    async imageDescription(prompt: string, question: string, imageUrl: string, caption: string){
        const output = await replicate.run(
        "salesforce/blip:2e1dddc8621f72155f24cf2e0adbde548458d3cab9f00c0139eea840d0ac4746",
        {
            input: {
                task: "visual_question_answering",
                question: question,
                image: imageUrl,
                caption: caption
            }
        }
        );
        console.log(output);
        return output;
    }


    async imageReconation(imageUrl: string){
        const output = await replicate.run(
            "daanelson/yolox:ae0d70cebf6afb2ac4f5e4375eb599c178238b312c8325a9a114827ba869e3e9",
            {
                input: {
                    nms: 0.3,
                    conf: 0.3,
                    tsize: 640,
                    model_name: "yolox-s",
                    input_image: imageUrl,
                    return_json: false
                }
            }
        );
        console.log(output);
        return output;
    }

    //google-research/maxim 
    async imageProcessing(imageUrl: string){
        const output = await replicate.run(
            "google-research/maxim:494ca4d578293b4b93945115601b6a38190519da18467556ca223d219c3af9f9",
            {
                input: {
                    image: "https://replicate.delivery/mgxm/6707a57f-4957-4047-b020-2160aed1d27a/1fromGOPR0950.png",
                    model: "Image Deblurring (GoPro)"
                }
            }
        );
        console.log(output);
        return output;
    }

    //pengdaqian2020/image-tagger
    async imageTaging(imageUrl: string){
        const output = await replicate.run(
            "pengdaqian2020/image-tagger:5a3e65f223fe2291679a6c3c812ddb278aa6d43bbcf118c09530b4309aaac00e",
            {
                input: {
                    image: imageUrl,
                    score_general_threshold: 0.35,
                    score_character_threshold: 0.85
                }
            }
        );
        console.log(output);
        return output;
    }

    async humorRecognition(imageUrl: string){
        const output = await replicate.run(
        "phamquiluan/facial-expression-recognition:b16694d5bfed43612f1bfad7015cf2b7883b732651c383fe174d4b7783775ff5",
            {
                input: {
                    input_path: imageUrl
                }
            }
        );
        console.log(output);
        return output;
    }

    async imageAnimation(imageUrl: string){
        const output = await replicate.run(
        "yoyo-nb/thin-plate-spline-motion-model:382ceb8a9439737020bad407dec813e150388873760ad4a5a83a2ad01b039977",
            {
                input: {
                dataset_name: "vox",
                source_image: imageUrl,
                driving_video: "https://replicate.delivery/mgxm/005e32a9-ff8e-4dfd-bcfd-bbbf3791ca94/driving.mp4"
                }
            }
        );
        console.log(output);
        return output;
    }

    //cjwbw/damo-text-to-video
    async textToVideo(prompt: string){
        const output = await replicate.run(
            "cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755",
            {
              input: {
                fps: 8,
                prompt: prompt["prompt"],
                num_frames: 50,
                num_inference_steps: 50
              }
            }
        );
        return output;
    }
}