export default async function handler(req, res) {
  const { slug } = req.query;
  const data = await (await fetch(`https://api.storyblok.com/v1/cdn/stories/${slug}?version=draft&token=wM296GLYg0BtNHBdvqcsuwtt&cv=${new Date().getTime()}`)).json();
  return res.status(200).json(data.story);
}
