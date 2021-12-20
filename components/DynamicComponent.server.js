import CTA from "./CTA.client";
import Exhibitors from "./Exhibitors.client";
import Footer from "./Footer.server";
import Head from "./Header.server";
import Heading from "./Heading.client";
import Hero from "./Hero.client";
import SpeakerListHome from "./home/SpeakerListHome.client";
import Page from "./Page.server";
import Quote from "./Quote";
import Speaker from "./Speaker.server";
import Steps from "./Steps.client";
import Text from "./Text.client";
import Topics from "./Topics.server";

// resolve Storyblok components to Next.js components
const Components = {
  header: Head,
  hero: Hero,
  speaker: Speaker,
  steps: Steps,
  topics: Topics,
  footer: Footer,
  page: Page,
  exhibitors: Exhibitors,
  speakerListHome: SpeakerListHome,
  heading: Heading,
  text: Text,
  cta: CTA,
  quote: Quote,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    // wrap with SbEditable for visual editing
    return (
      // <Suspense fallback={"Loading..."}>
      <Component blok={blok} />
      // </Suspense>
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
