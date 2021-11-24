import DynamicComponent from "../components/DynamicComponent.server";

import useData from "../lib/useData";
import fetchData from "../lib/fetchData";

export default function Speaker() {
  const story = useData("speakerPage", () =>
    fetchData(`/api/components/speaker`)
  );

  console.log(story);

  return (
    <div>
      <DynamicComponent blok={story.content} />
    </div>
  );
}
