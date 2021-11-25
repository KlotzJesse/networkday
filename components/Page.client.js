import DynamicComponent from "./DynamicComponent.client";

const Page = ({ blok }) => (
  <main>
    {blok.body
      ? blok.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);

export default Page;