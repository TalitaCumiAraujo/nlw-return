import express from "express";
import { Request, Response } from "express";
import { SubmitFeedbackUseCase } from "../useCases/submitFeedbackUseCase";
import { PrismaFeedbacksRepository } from "../repositories/prisma/PrismaFeedbacksRepository";
import { NodemailerMailAdapter } from "../adapters/nodemailer/NodemailerMailAdapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req: Request, res: Response) => {
  const { type, comment, screenshot } = req.body;
  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();
  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );
  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });
  return res
    .status(201)
    .json({ message: "Feedback criado com sucesso."}).send();
});

