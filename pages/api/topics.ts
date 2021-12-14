import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const topics = await prisma.topic.findMany({include: {
    speaker: true
  }}); 
  return res.status(200).json(topics);
}