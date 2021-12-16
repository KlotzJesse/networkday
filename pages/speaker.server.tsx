import DynamicComponent from "@components/DynamicComponent.server";
import ScrollDrag from "@components/ScrollDrag.client";
import SEO from "@components/SEO.client";
import fetchData from "@lib/fetchData";
import useData from "@lib/useData";

export default function Speaker() {
  const story = useData("speakerPage", () =>
    fetchData(`/api/components/speaker`)
  );
  return (
    <div>
      <SEO canonical={`https://www.network-day.de/speaker`} />
      <DynamicComponent blok={story.content} />

      <ScrollDrag />
    </div>
  );
}
