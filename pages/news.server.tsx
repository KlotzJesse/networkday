import { Suspense } from "react";
import NewsList from "../components/NewsList.server";

export default function Test() {
  return (
    <div>
      <Suspense fallback="WTF?">
        <NewsList />
      </Suspense>
    </div>
  );
}
