import Image from "next/image";
import fetchData from "../lib/fetchData";
import slug from "../lib/slugify";
import useData from "../lib/useData";
import Carousel from "./Carousel.client";

export default function Topics() {
  const topics = useData("topics", () => fetchData(`/api/topics`));

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <Carousel>
          {topics.slice(0, 4).map((item) => (
            <div
              key={item.name}
              className="flex-carouselSm md:flex-carouselMd embla__slide"
            >
              <div className="p-4 embla__slide__inner">
                <div className="h-full overflow-hidden bg-white border-2 border-gray-200 rounded-lg border-opacity-60">
                  <Image
                    width="365"
                    height="202"
                    className="object-cover object-center w-full lg:h-48 md:h-36"
                    src={item.img}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-600 title-font">
                      Thema
                    </h2>
                    <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                      {item.name}
                    </h1>
                    <p className="mb-3 leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap items-center ">
                      <a
                        href={"/blog/" + slug(item.name)}
                        className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0"
                      >
                        Mehr erfahren
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
