import fetchData from "@lib/fetchData";
import useData from "@lib/useData";
import Header from "./Header.client";
interface HeaderProps {}

export default function Head(props: HeaderProps) {
  const recentPosts = useData("recentPosts", () =>
    fetchData(`/api/components/blog`)
  );
  const topics = useData("topics", () => fetchData(`/api/topics`));

  return (
    <>
      <Header recentPosts={recentPosts} topics={topics} />
    </>
  );
}
