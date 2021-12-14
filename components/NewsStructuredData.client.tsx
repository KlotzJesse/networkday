import { BlogJsonLd } from "next-seo";

interface NewsStructuredDataProps {}

export const NewsStructuredData = (props: NewsStructuredDataProps) => {
  return (
    <div>
      <BlogJsonLd
        url="https://example.com/blog"
        title="Blog headline"
        images={[
          "https://example.com/photos/1x1/photo.jpg",
          "https://example.com/photos/4x3/photo.jpg",
          "https://example.com/photos/16x9/photo.jpg",
        ]}
        datePublished="2015-02-05T08:00:00+08:00"
        dateModified="2015-02-05T09:00:00+08:00"
        authorName="Jane Blogs"
        description="This is a mighty good description of this blog."
      />
    </div>
  );
};

export default NewsStructuredData;
