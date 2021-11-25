import StoryblokClient from "storyblok-js-client";

const Storyblok =
  global.Storyblok ||
  new StoryblokClient({
    accessToken: "wM296GLYg0BtNHBdvqcsuwtt",
    cache: {
      clear: "auto",
      type: "memory",
    },
  });

if (process.env.NODE_ENV === "development") global.Storyblok = Storyblok;

export default Storyblok;
