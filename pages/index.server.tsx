import DynamicComponent from "@components/DynamicComponent.server";
import SEO from "@components/SEO.client";
import fetchData from "@lib/fetchData";
import useData from "@lib/useData";

export default function Home() {
  const story = useData("homePage", () => fetchData(`/api/components/home`));
  return (
    <div>
      <SEO canonical="https://www.network-day.de/" />
      <DynamicComponent blok={story.content} />
    </div>
  );
}
