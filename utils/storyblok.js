import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "wM296GLYg0BtNHBdvqcsuwtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
