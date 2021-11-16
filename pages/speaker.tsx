import React from "react";
import Storyblok from "../utils/storyblok";
import DynamicComponent from "../components/DynamicComponent";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import Speaker from "../components/Speaker";

export const speaker = (props) => {
  const story = props.story;
  return (
    <div>
      <DynamicComponent blok={story.content} />
      {props.speakerList.map((el) => {
        return <p key={el.name}>{el.name}</p>;
      })}
    </div>
  );
};

export async function getStaticProps(context) {
  const speakerList = await prisma.speaker.findMany({});

  // the slug of the story
  let slug = "speaker";
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
      speakerList: speakerList,
    },
    revalidate: 10,
  };
}

export default speaker;
