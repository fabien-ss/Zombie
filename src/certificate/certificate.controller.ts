import { Controller, Get, Res, Body } from '@nestjs/common';
import { Response } from 'express';
import { CertificateService } from './certificate.service';

@Controller('certificate')
export class CertificateController {
 constructor(private certificateService: CertificateService) {}

 @Get()
 generateCertificate(@Body() data: any, @Res() res: Response) {
    const doc = this.certificateService.generateCertificate(data.studentName, data.courseName, data.score);
    res.set({
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename=certificate.pdf',
    });
    doc.pipe(res);
 }

}
