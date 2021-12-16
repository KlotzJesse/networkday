import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  var data = await (await fetch(`https://api.storyblok.com/v1/cdn/stories/${(slug as string[]).join("/")}?version=draft&token=wM296GLYg0BtNHBdvqcsuwtt&cv=${new Date().getTime()}`)).json();

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate=59');

  if(data.stories == "This record could not be found") {
    data = await (await fetch(`https://api.storyblok.com/v1/cdn/stories/?version=draft&token=wM296GLYg0BtNHBdvqcsuwtt&cv=${new Date().getTime()}&starts_with=${(slug as string[]).join("/")}`)).json();
    return res.status(200).json(data.stories);
  }
  
  return res.status(200).json(data.story);
}
