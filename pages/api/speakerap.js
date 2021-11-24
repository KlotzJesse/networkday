import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const speaker = await prisma.speaker.findMany({});
  return res.status(200).json(speaker);
}
