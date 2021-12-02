import DynamicComponent from "../components/DynamicComponent.server";
import fetchData from "../lib/fetchData";
import useData from "../lib/useData";

export default function Speaker() {
  const story = useData("speakerPage", () =>
    fetchData(`/api/components/speaker`)
  );
  return (
    <div>
      <DynamicComponent blok={story.content} />
    </div>
  );
}
