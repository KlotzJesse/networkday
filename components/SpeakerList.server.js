import useData from "../lib/useData";
import fetchData from "../lib/fetchData";

export default function SpeakerList() {
  const speakerList = useData("speaker", () =>
    fetchData(`https://networkday.vercel.app/api/speakerap`)
  );

  return (
    <>
      {speakerList.map((speaker) => {
        return speaker.name;
      })}
    </>
  );
}
