import DynamicComponent from "@components/DynamicComponent.server";
import Footer from "@components/Footer.server";
import SEO from "@components/SEO.client";
import Head from "@components/ServerHeader.server";
import fetchData from "@lib/fetchData";
import readingTime from "@lib/readingTime";
import slug from "@lib/slugify";
import useData from "@lib/useData";
import Image from "next/image";
import { Suspense } from "react";

export default function BlogPost({ router }: { router: any }) {
  const postSlug = router.route.split("/")[2];
  const story = useData("blogPost_" + postSlug, () =>
    fetchData(`/api/components/blog/${postSlug}`)
  );

  if (!story.content) return <div>Empty blog page</div>;

  let text = story.content.title;

  story.content.body.map((blok: any) => {
    if (!blok.body) return;
    blok.body.map((comp: any) => {
      text += " " + (comp.title ?? comp.content);
    });
  });

  return (
    <div className="bg-white">
      <SEO canonical={`https://www.network-day.de/${story.full_slug}`} />

      <Suspense fallback={<p>Loading</p>}>
        <Head />

        <div className="flex w-screen px-4 pt-8 mx-auto space-x-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <nav className="sticky hidden w-1/4 h-full top-32 md:block">
            <p className="font-bold uppercase">Zusammenfassung</p>

            <ul className="list-decimal list-inside">
              {story.content.body.map((section: any) => {
                if (!section.name) return;
                return (
                  <li key={section._uid} className="text-sm leading-10">
                    <a href={"#" + slug(section.name)}>{section.name}</a>
                  </li>
                );
              })}
            </ul>
            <hr className="my-4 border-gray-300" />
            <svg
              className="toc-marker"
              width="200"
              height="200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#444"
                strokeWidth="3"
                fill="transparent"
                strokeDasharray="0, 0, 0, 1000"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-0.5, -0.5)"
              />
            </svg>
          </nav>
          <div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl ">
              {story.content.title}
            </h1>
            <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
              <div className="flex items-center">
                <p className="ml-2 text-sm text-gray-500 ">@gastronomy.world</p>
              </div>
              <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
                {readingTime(text)} •{" "}
                <span>
                  {new Date(story.published_at).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </p>
            </div>
            <div className="w-full mt-4 prose max-w-none ">
              <div className="relative h-96">
                <Image
                  priority
                  alt="Test"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  src={story.content.image.filename}
                />
              </div>

              {story.content.body.map((entry: any) => {
                if (!entry.name) {
                  return <DynamicComponent key={entry._uid} blok={entry} />;
                }
                return (
                  <section key={entry._uid} id={slug(entry.name)}>
                    {entry.body.map((subEntry: any) => {
                      return (
                        <DynamicComponent key={subEntry._uid} blok={subEntry} />
                      );
                    })}
                  </section>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </Suspense>
    </div>
  );
}
