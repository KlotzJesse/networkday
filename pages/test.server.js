import { Suspense } from "react";
import SpeakerList from "../components/SpeakerList.server";

export default function Test() {
  return (
    <div>
      <Suspense fallback="WTF?">
        <SpeakerList />
      </Suspense>
    </div>
  );
}
