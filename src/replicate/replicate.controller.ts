import { Body, Controller, Post } from "@nestjs/common";
import { ReplicateService } from "./replicate.service";

@Controller('ia-helper')
export class ReplicateController {
    constructor(private readonly replicateService: ReplicateService) {}

    @Post('generate-image')
    genareImage(@Body() prompt: string){
        this.replicateService.genareImage(prompt);
    }

    @Post('answer-question')
    answerQuestion(@Body() question: string){
        return this.replicateService.answerQuestion(question);
    }

    @Post('generate-music')
    generateMusic(@Body() prompt: string){
        return this.replicateService.generateMusic(prompt);
    }

    @Post('text-to-sond')
    textToSond(@Body() prompt: string){
        return this.replicateService.textToSond(prompt);
    }
    
    @Post('text-to-image-cartoon')
    textToImageCartoon(@Body() prompt: string){
        return this.replicateService.textToImageCartoon(prompt);
    }

    @Post('image-description')
    //salesforce/blip
    async imageDescription(@Body() prompt: string,@Body() question: string,@Body() imageUrl: string,@Body() caption: string){
        return this.replicateService.imageDescription(prompt, question, imageUrl, caption);
    }   

    @Post('image-reconation')
    imageReconation(@Body() prompt: string){
        return this.replicateService.imageReconation(prompt);
    }

    @Post('image-processing')
    imageProcessing(@Body() prompt: string){
        return this.replicateService.imageProcessing(prompt);
    }

    @Post('image-taging')
    imageTaging(@Body() prompt: string){
        return this.replicateService.imageTaging(prompt);
    }

    @Post('humour-recognition')
    humourRecognition(@Body() prompt: string){
        return this.replicateService.humorRecognition(prompt);
    }

    @Post('image-animation')
    imageAnimation(@Body() prompt: string){
        return this.replicateService.imageAnimation(prompt);
    }

    @Post('text-to-video')
    textToVideo(@Body() prompt: string){
        return this.replicateService.textToVideo(prompt);
    }
}