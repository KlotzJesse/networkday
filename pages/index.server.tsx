import DynamicComponent from "@components/DynamicComponent.server";
import fetchData from "@lib/fetchData";
import useData from "@lib/useData";

export default function Home() {
  const story = useData("homePage", () => fetchData(`/api/components/home`));
  return (
    <div>
      <DynamicComponent blok={story.content} />
    </div>
  );
}
