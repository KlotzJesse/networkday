import prisma from "../../lib/prisma";

export default async function handler(req, res) {
  const topics = await prisma.topic.findMany({});
  return res.status(200).json(topics);
}