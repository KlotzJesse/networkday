import Image from "next/image";
import slugify from "slugify";
import DynamicComponent from "../../components/DynamicComponent.server";
import Footer from "../../components/Footer.server";
import Header from "../../components/Header.client";
import fetchData from "../../lib/fetchData";
import readingTime from "../../lib/readingTime";
import useData from "../../lib/useData";
import ErrorPage from "../404";

export default function BlogPost({ router }) {
  const postSlug = router.route.split("/")[2];
  const story = useData("blogPost", () =>
    fetchData(`/api/components/blog/${postSlug}`)
  );

  if (!story.content) return <ErrorPage />;

  let text = story.content.title;

  story.content.body.map((blok) => {
    if (!blok.body) return;
    blok.body.map((comp) => {
      text += " " + (comp.title ?? comp.content);
    });
  });

  return (
    <div className="bg-white">
      <Header />
      <div className="flex w-screen px-4 pt-8 mx-auto space-x-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <nav className="sticky w-1/4 h-full top-32">
          <p className="font-bold uppercase">Zusammenfassung</p>

          <ul className="list-decimal list-inside">
            {story.content.body.map((section) => {
              if (!section.name) return;
              return (
                <li key={section._uid} className="text-sm leading-10">
                  <a href={"#" + slugify(section.name, { lower: true })}>
                    {section.name}
                  </a>
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
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                @gastronomy.world
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
              {readingTime(text)} • <span>30. November 2021</span>
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

            {story.content.body.map((entry) => {
              if (!entry.name) {
                return <DynamicComponent key={entry._uid} blok={entry} />;
              }
              return (
                <section
                  key={entry._uid}
                  id={slugify(entry.name, { lower: true })}
                >
                  {entry.body.map((subEntry) => {
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
    </div>
  );
}
