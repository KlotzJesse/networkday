import { topics } from "./Header.client";
import Image from "next/image";
import slugify from "slugify";

export default function Topics() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {topics.map((item) => (
            <div key={item.name} className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
                <Image
                  width="720px"
                  height="400px"
                  className="object-cover object-center w-full lg:h-48 md:h-36"
                  src="https://source.unsplash.com/720x400/?gastronomy,sustainable,health"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
                    Thema
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
                    {item.name}
                  </h1>
                  <p className="mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap items-center ">
                    <a
                      href={
                        "/topics/" +
                        slugify(item.name, {
                          lower: true,
                        })
                      }
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
          ))}
        </div>
      </div>
    </section>
  );
}
