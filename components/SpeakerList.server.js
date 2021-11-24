import useData from "../lib/useData";
import fetchData from "../lib/fetchData";

export default function SpeakerList() {
  const speakerList = useData("speaker", () => fetchData(`/api/speakerap`));

  console.log(speakerList);

  return (
    <>
      {speakerList.map((speaker) => {
        return speaker.name;
      })}
    </>
  );
}
