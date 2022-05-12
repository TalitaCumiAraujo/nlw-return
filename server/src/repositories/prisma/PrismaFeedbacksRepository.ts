import { IFeedbacksRepository , FeedbackCreateDTO} from "../IFeedbacksRepository";
import { prisma } from "../../prisma";

export class PrismaFeedbacksRepository implements IFeedbacksRepository{
   async create ({type, comment, screenshot}: FeedbackCreateDTO){
   await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }

}