interface SendMailDTO {
  subject: string;
  body: string;
}

interface IMailAdapter {
  sendMail: (data: SendMailDTO) => Promise<void>;
}
export { SendMailDTO, IMailAdapter };
