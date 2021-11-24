import { PrismaClient } from "@prisma/client";

import useData from "../lib/useData";
import fetchData from "../lib/fetchData";

export default function SpeakerList() {
  const speakerList = useData("speaker", () => fetchData(`/api/speakerap`));

  return (
    <>
      {speakerList.map((speaker) => {
        return speaker.name;
      })}
    </>
  );
}
