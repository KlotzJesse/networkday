/* This example requires Tailwind CSS v2.0+ */
import { BookOpenIcon, RssIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";

const links = [
  {
    title: "Startseite",
    description: "Zurück zur Startseite",
    href: "/",
    icon: BookOpenIcon,
  },
  {
    title: "Blog",
    description: "Lesen Sie unsere neuesten Nachrichten und Artikel",
    href: "/blog",
    icon: RssIcon,
  },
];

export default function ErrorPage() {
  return (
    <div className="bg-white ">
      <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex-shrink-0 pt-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-12 mx-auto"
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
        </div>
        <div className="max-w-xl py-16 mx-auto sm:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase">
              Fehler 404
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Diese Seite existiert nicht.
            </h1>
            <p className="mt-2 text-lg text-gray-500">
              Die von Ihnen gesuchte Seite konnte nicht gefunden werden.
            </p>
          </div>
          <div className="mt-12">
            <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Beliebte Seiten
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative flex items-start py-6 space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                      <link.icon
                        className="w-6 h-6 text-indigo-700"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <a href={link.href} className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="self-center flex-shrink-0">
                    <ChevronRightIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Oder zurück zur Startseite
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="py-12 text-center border-t border-gray-200 md:flex md:justify-between">
          <p className="text-base text-gray-400">
            &copy; #NetworkDay. All rights reserved.
          </p>
          <div className="flex justify-center mt-6 space-x-8 md:mt-0"></div>
        </div>
      </footer>
    </div>
  );
}
