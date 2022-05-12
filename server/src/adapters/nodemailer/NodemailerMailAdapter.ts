import { IMailAdapter, SendMailDTO } from "../IMailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8921345b49ce9b",
    pass: "8f35c806662dd3",
  },
});
export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({subject, body}: SendMailDTO) {
    transport.sendMail({
      from: "Equipe Feedget <feedget@hotmail.com.br>",
      to: "Talita Araujo <talitacumi.araujo@gmail.com>",
      subject: subject,
      html:body
    });
  }
}
