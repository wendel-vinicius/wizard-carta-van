import * as nodemailer from 'nodemailer';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface SendReportEmailOptions {
  to: string;
  attachment: Buffer;
  isZip: boolean;
  nomeDestinatario: string;
  referencia?: string;
}

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  async sendReportEmail(options: SendReportEmailOptions) {
    const { to, attachment, isZip, nomeDestinatario, referencia } = options;

    try {
      const templatePath = path.join(__dirname, 'templates', 'carta-van.html');
      let htmlTemplate = fs.readFileSync(templatePath, 'utf-8');

      htmlTemplate = htmlTemplate.replace('{{nomeDestinatario}}', nomeDestinatario);

      const filename = isZip ? 'cartas_de_van.zip' : 'carta_de_van.pdf';
      const subject = `Plugbank | Sua Carta de VAN Bancária está disponível`;

      const mailOptions = {
        from: `"Plugbank" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html: htmlTemplate,
        attachments: [
          {
            filename,
            content: attachment,
            contentType: isZip ? 'application/zip' : 'application/pdf',
          },
        ],
      };

      await this.transporter.sendMail(mailOptions);
      console.log(`Email enviado com sucesso para: ${to}`);

    } catch (error) {
      console.error(`Falha ao enviar e-mail para ${to}:`, error);
      throw new InternalServerErrorException('Falha ao enviar o e-mail da carta de VAN.');
    }
  }
}