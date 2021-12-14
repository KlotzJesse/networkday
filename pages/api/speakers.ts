import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const speaker = await prisma.speaker.findMany({include: {
      Topic: true
  }});
  return res.status(200).json(speaker);
}