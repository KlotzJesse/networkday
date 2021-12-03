import fetchData from "@lib/fetchData";
import slug from "@lib/slugify";
import useData from "@lib/useData";
import Link from "next/link";

export default function Footer() {
  const topics = useData("topics", () => fetchData(`/api/topics`));

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <Link href={"/"} passHref>
            <a
              aria-label="Go home"
              title="#NetworkDay"
              className="inline-flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  className="text-pink-500"
                  d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                />
                <path
                  className="text-blue-900"
                  d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                #NetworkDay
              </span>
            </a>
          </Link>

          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Treffen Sie Kollegen, tauschen sich gemeinsam aus und lassen sich
              von unseren Branchenexperten die neuesten (Food)-trends, Ideen,
              Produkte und Entwicklungen rund um Ihr Geschäft vorstellen.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Wir haben Experten aus der Branche eingeladen um Ihre Erfahrungen
              mit Euch zu teilen.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div className="col-span-2">
            <p className="font-semibold tracking-wide text-gray-800">Themen</p>
            <ul className="mt-2 space-y-2">
              {topics.map((topic) => {
                return (
                  <li key={topic.name}>
                    <Link href={"/blog/" + slug(topic.name)} passHref>
                      <a className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                        {topic.name}
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">
              #NetworkDay
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href={"/blog"} passHref>
                  <a className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/speaker"} passHref>
                  <a className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Speaker
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold tracking-wide text-gray-800">Firma</p>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href={"/privacy"} passHref>
                  <a className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Datenschutzerklärung
                  </a>
                </Link>
              </li>
              <li>
                <Link href={"/impressum"} passHref>
                  <a className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                    Impressum
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2021 @gastronomy.world. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <Link
            href={"https://www.linkedin.com/company/gastronomyworld/"}
            passHref
          >
            <a
              target="_blank"
              className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              <svg fill="currentColor" className="h-5" viewBox="0 0 192 192">
                {
                  <g
                    fill="none"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                  >
                    <path d="M0,192v-192h192v192z" fill="none"></path>
                    <g fill="currentColor">
                      <g id="surface1">
                        <path d="M156,0h-120c-19.875,0 -36,16.125 -36,36v120c0,19.875 16.125,36 36,36h120c19.875,0 36,-16.125 36,-36v-120c0,-19.875 -16.125,-36 -36,-36zM59.36539,162.98077h-29.82693l-0.17307,-89.30769h29.82692zM43.70192,61.99038h-0.17308c-9.75,0 -16.03846,-6.72115 -16.03846,-15.08653c0,-8.56731 6.49039,-15.0577 16.41347,-15.0577c9.92308,0 16.00961,6.49038 16.21153,15.0577c0,8.36538 -6.31731,15.08653 -16.41346,15.08653zM162.77885,162.98077h-30.08654v-48.51923c0,-11.74039 -3.11538,-19.73077 -13.61538,-19.73077c-8.01923,0 -12.34615,5.39423 -14.42308,10.61538c-0.77885,1.875 -0.98077,4.44231 -0.98077,7.06731v50.56731h-30.23077l-0.17308,-89.30769h30.23077l0.17308,12.60577c3.86538,-5.97116 10.29808,-14.42308 25.70192,-14.42308c19.09616,0 33.37501,12.46154 33.37501,39.25961v51.86539z"></path>
                      </g>
                    </g>
                  </g>
                }
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
