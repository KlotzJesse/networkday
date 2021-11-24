import Storyblok from "../../../utils/storyblok";

export default async function handler(req, res) {
  const { slug } = req.query;
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, {
    version: "draft", // or 'published'
  });
  return res.status(200).json(data.story);
}
