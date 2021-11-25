import useData from "../lib/useData";
import {Suspense} from "react";

export default function SpeakerList() {
  const storyIds = useData('top', () => fetchData('https://hacker-news.firebaseio.com/v0/topstories.json'))

  return (
    <>
      {storyIds.slice(0, 30).map((id) => {
        return (
          <Suspense fallback={"T"} key={id}>
            <p>{id}</p>
          </Suspense>
        )
      })}
    </>
}

export async function fetchData(type) {
  const res = await fetch(type);
  if (res.status !== 200) {
    throw new Error(`Status ${res.status}`);
  }
  return res.json();
}