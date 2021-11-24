import SbEditable from "storyblok-react";
import Header from "./Header.client";
import Page from "./Page.server";
import Hero from "./Hero.client";
import Speaker from "./Speaker.server";
import Steps from "./Steps.client";
import Topics from "./Topics.client";
import Footer from "./Footer.client";
import Exhibitors from "./Exhibitors.client";
import { Suspense } from "react";

// resolve Storyblok components to Next.js components
const Components = {
  header: Header,
  hero: Hero,
  speaker: Speaker,
  steps: Steps,
  topics: Topics,
  footer: Footer,
  page: Page,
  exhibitors: Exhibitors,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    // wrap with SbEditable for visual editing
    return (
      <Suspense fallback={"Loading..."}>
        <Component blok={blok} />
      </Suspense>
    );
  }

  // fallback if the component doesn't exist
  return (
    <p className="text-center">
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
