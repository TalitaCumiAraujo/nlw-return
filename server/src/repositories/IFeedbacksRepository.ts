interface FeedbackCreateDTO {
  type: string;
  comment: string;
  screenshot?: string;
}
interface IFeedbacksRepository {
  create: (data: FeedbackCreateDTO) => Promise<void>;
}
export {FeedbackCreateDTO, IFeedbacksRepository};
