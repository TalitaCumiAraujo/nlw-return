import { IMailAdapter } from "../adapters/IMailAdapter";
import { IFeedbacksRepository } from "../repositories/IFeedbacksRepository";
interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}
export class SubmitFeedbackUseCase {
  private feedbacksRepository: IFeedbacksRepository;
  private mailAdapter: IMailAdapter;
  constructor(
    feedbacksRepository: IFeedbacksRepository,
    mailAdapter: IMailAdapter
  ) {
    this.feedbacksRepository = feedbacksRepository;
    this.mailAdapter = mailAdapter;
  }
  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    await this.feedbacksRepository.create({ type, comment, screenshot });
  
    await this.mailAdapter.sendMail({
      subject: "Novo feedback",
      body: [
        `<div style="font-size: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot && `<img src="${screenshot}" />`,
        `</div>`,
      ].join("\n"),
    });
  }
}
