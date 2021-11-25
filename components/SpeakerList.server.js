import useData from "../lib/useData";
import fetchData from "../lib/fetchData";

export default function SpeakerList() {
  const speakerList = useData("speakeraaaa", () => fetchData(`/api/speakerap`));

  return (
    <>
      {speakerList.map((speaker) => {
        return speaker.name;
      })}
    </>
  );
}
