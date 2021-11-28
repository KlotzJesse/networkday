import fetchData from "../../lib/fetchData";
import useData from "../../lib/useData";

export default function Speaker({ router }) {
  const postSlug = router.route.split("/")[2];
  const story = useData("blogPost", () =>
    fetchData(`/api/components/blog/${postSlug}`)
  );

  return (
    <div>
      {/* <DynamicComponent blok={story.content} /> */} {story.content.title}
    </div>
  );
}
