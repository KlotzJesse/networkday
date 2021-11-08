import SbEditable from "storyblok-react";
import Header from "./Header";
import Page from "./Page";

// resolve Storyblok components to Next.js components
const Components = {
  header: Header,
  page: Page,
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    // wrap with SbEditable for visual editing
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
    );
  }

  // fallback if the component doesn't exist
  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  );
};

export default DynamicComponent;
