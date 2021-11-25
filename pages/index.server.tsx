import DynamicComponent from "../components/DynamicComponent.server";
import useData from "../lib/useData";
import fetchData from "../lib/fetchData";

export default function Home() {
  const story = useData("homePage", () => fetchData(`/api/components/home`));
  return (
    <div>
      <DynamicComponent blok={story.content} />
    </div>
  );
}
