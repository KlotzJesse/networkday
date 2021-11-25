import useData from "../lib/useData";
import { Suspense } from "react";
import fetchData from "../lib/fetchData";

export default function SpeakerList() {
  const storyIds = useData("top", () => fetchData("/api/news"));

  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense fallback={"T"} key={id}>
            <p>{id}</p>
          </Suspense>
        );
      })}
    </>
  );
}
