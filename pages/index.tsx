/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Header from "../components/Header";
import Speaker from "../components/Speaker";
import Exhibitors from "../components/Exhibitors";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import Topics from "../components/Topics";

// The Storyblok Client
import Storyblok from "../utils/storyblok";
import DynamicComponent from "../components/DynamicComponent";

export default function Home(props) {
  const story = props.story;
  return (
    <div>
      <DynamicComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps(context) {
  // the slug of the story
  let slug = "home";
  // the storyblok params
  let params = {
    version: "draft", // or 'published'
  };

  // checks if Next.js is in preview mode
  if (context.preview) {
    // loads the draft version
    params.version = "draft";
    // appends the cache version to get the latest content
    //params.cv = Date.now();
  }

  // loads the story from the Storyblok API
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

  // return the story from Storyblok and whether preview mode is active
  return {
    props: {
      story: data ? data.story : false,
      preview: context.preview || false,
    },
    revalidate: 10,
  };
}
