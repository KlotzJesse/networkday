export default async function handler(req, res) {
  const { slug } = req.query;
  var data = await (await fetch(`https://api.storyblok.com/v1/cdn/stories/${slug.join("/")}?version=draft&token=wM296GLYg0BtNHBdvqcsuwtt&cv=${new Date().getTime()}`)).json();

  if(data.stories == "This record could not be found") {
    data = await (await fetch(`https://api.storyblok.com/v1/cdn/stories/?version=draft&token=wM296GLYg0BtNHBdvqcsuwtt&cv=${new Date().getTime()}&starts_with=${slug.join("/")}`)).json();
    return res.status(200).json(data.stories);
  }
  
  return res.status(200).json(data.story);
}
