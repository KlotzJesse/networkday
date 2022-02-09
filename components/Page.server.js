import DynamicComponent from "./DynamicComponent.server";

export default function Page({ blok }) {
  return (
    <main>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  );
}
