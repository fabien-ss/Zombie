import { Injectable } from '@nestjs/common';
const PDFDocument = require('pdfkit');
const fs = require('fs');

@Injectable()
export class CertificateService {
 generateCertificate(studentName: string, courseName: string, score: number) {
    const doc = new PDFDocument({
      layout: 'landscape',
      size: 'A4',
    });

    function jumpLine(doc, lines) {
        for (let index = 0; index < lines; index++) {
          doc.moveDown();
        }
      }
      
      doc.pipe(fs.createWriteStream('output.pdf'));
      
      doc.rect(0, 0, doc.page.width, doc.page.height).fill('#fff');
      
      doc.fontSize(10);
      
      // Margin
      const distanceMargin = 18;
      
      doc
        .fillAndStroke('#90EE90')
        .lineWidth(20)
        .lineJoin('round')
        .rect(
          distanceMargin,
          distanceMargin,
          doc.page.width - distanceMargin * 2,
          doc.page.height - distanceMargin * 2,
        )
        .stroke();
      
      // Header
      const maxWidth = 140;
      const maxHeight = 70;
      
      doc.image('assets/boxing-zombie-winner-computer-backpack.jpg', doc.page.width / 2 - maxWidth / 2, 60, {
        fit: [maxWidth, maxHeight],
        align: 'center',
      });
      
      jumpLine(doc, 5)
      
      doc
        .font('fonts/NotoSansJP-Light.otf')
        .fontSize(10)
        .fill('#021c27')
        .text('Super Course for Awesomes', {
          align: 'center',
        });
      
      jumpLine(doc, 2)
      
      // Content
      doc
        .font('fonts/NotoSansJP-Regular.otf')
        .fontSize(16)
        .fill('#021c27')
        .text('CERTIFICATE OF COMPLETION', {
          align: 'center',
        });
      
      jumpLine(doc, 1)
      
      doc
        .font('fonts/NotoSansJP-Light.otf')
        .fontSize(10)
        .fill('#021c27')
        .text('Present to', {
          align: 'center',
        });
      
      jumpLine(doc, 2)
      
      doc
        .font('fonts/NotoSansJP-Bold.otf')
        .fontSize(24)
        .fill('#021c27')
        .text(studentName, {
          align: 'center',
        });
      
      jumpLine(doc, 1)
      
      doc
        .font('fonts/NotoSansJP-Light.otf')
        .fontSize(10)
        .fill('#90EE90')
        .text('Successfully completed the Super Course for '+courseName+".", {
          align: 'center',
        });
      
      jumpLine(doc, 7)
      
      doc.lineWidth(1);
      
      // Signatures
      const lineSize = 174;
      const signatureHeight = 390;
      
      doc.fillAndStroke('#90EE90');
      doc.strokeOpacity(0.2);
      
      const startLine1 = 128;
      const endLine1 = 128 + lineSize;
      doc
        .moveTo(startLine1, signatureHeight)
        .lineTo(endLine1, signatureHeight)
        .stroke();
      
      const startLine2 = endLine1 + 32;
      const endLine2 = startLine2 + lineSize;
      doc
        .moveTo(startLine2, signatureHeight)
        .lineTo(endLine2, signatureHeight)
        .stroke();
      
      const startLine3 = endLine2 + 32;
      const endLine3 = startLine3 + lineSize;
      doc
        .moveTo(startLine3, signatureHeight)
        .lineTo(endLine3, signatureHeight)
        .stroke();
      
      doc
        .font('fonts/NotoSansJP-Bold.otf')
        .fontSize(10)
        .fill('#021c27')
        .text('Zombie Association', startLine1, signatureHeight + 10, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font('fonts/NotoSansJP-Light.otf')
        .fontSize(10)
        .fill('#021c27')
        .text('Platform', startLine1, signatureHeight + 25, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font('fonts/NotoSansJP-Bold.otf')
        .fontSize(10)
        .fill('#021c27')
        .text(studentName, startLine2, signatureHeight + 10, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font('fonts/NotoSansJP-Light.otf')
        .fontSize(10)
        .fill('#021c27')
        .text('Student', startLine2, signatureHeight + 25, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font('fonts/NotoSansJP-Bold.otf')
        .fontSize(10)
        .fill('#021c27')
        .text(score, startLine3, signatureHeight + 10, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      doc
        .font('fonts/NotoSansJP-Light.otf')
        .fontSize(10)
        .fill('#021c27')
        .text('Score sur 20', startLine3, signatureHeight + 25, {
          columns: 1,
          columnGap: 0,
          height: 40,
          width: lineSize,
          align: 'center',
        });
      
      jumpLine(doc, 4);
      
      // Validation link
      const link =
        'https://vittoria.madagascar.webcup.hodi.host/home';
      
      const linkWidth = doc.widthOfString(link);
      const linkHeight = doc.currentLineHeight();
      
      doc
        .underline(
          doc.page.width / 2 - linkWidth / 2,
          448,
          linkWidth,
          linkHeight,
          { color: '#021c27' },
        )
        .link(
          doc.page.width / 2 - linkWidth / 2,
          448,
          linkWidth,
          linkHeight,
          link,
        );
      
      doc
        .font('fonts/NotoSansJP-Light.otf')
        .fontSize(10)
        .fill('#021c27')
        .text(
          link,
          doc.page.width / 2 - linkWidth / 2,
          448,
          linkWidth,
          linkHeight
        );
      
      // Footer
      const bottomHeight = doc.page.height - 100;
      
      doc.image('assets/qr.png', doc.page.width / 2 - 30, bottomHeight, {
        fit: [60, 60],
      });
      
      doc.end();

      return doc;
 }
}
