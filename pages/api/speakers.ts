import prisma from "@lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const speaker = await prisma.speaker.findMany({include: {
      Topic: true
  }});
  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=59');
  return res.status(200).json(speaker);
}