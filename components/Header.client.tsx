import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { Fragment } from "react";
import slugify from "slugify";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import HeroIcon from "./HeroIcon";

const callsToAction = [
  { name: "Zugang reservieren", href: "/register", icon: PlayIcon },
  { name: "Hilfe", href: "/help", icon: PhoneIcon },
];
const resources = [
  {
    name: "Hilfe Center",
    description:
      "Holen Sie sich Antworten auf all Ihre Fragen in unseren Foren oder kontaktieren Sie den Support.",
    href: "/help",
    icon: SupportIcon,
  },
  {
    name: "Leitfäden",
    description:
      "Erfahren Sie, wie Sie unsere Plattform optimal nutzen können.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Veranstaltungen",
    description:
      "Informieren Sie sich, welche Treffen und anderen Veranstaltungen wir in Ihrer Nähe planen.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Sicherheit",
    description: "Verstehen Sie, wie ernst wir Ihre Privatsphäre nehmen.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const recentPosts = useSWR("/api/components/blog", fetcher).data ?? [];
  const topics = useSWR("/api/topics", fetcher).data ?? [];

  return (
    <Popover className="relative bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href={"/"} passHref>
              <a>
                <span className="sr-only">#NetworkDay</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
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
              </a>
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Menü öffnen</span>
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Agenda</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {topics.map((item) => (
                            <Link
                              key={item.name}
                              href={
                                "/blog/" +
                                slugify(item.name, {
                                  lower: true,
                                })
                              }
                              passHref
                            >
                              <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                <HeroIcon
                                  name={item.icon}
                                  className="flex-shrink-0 w-6 h-6 text-indigo-600"
                                  aria-hidden="true"
                                  outline
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <Link href={item.href} passHref>
                                <a className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100">
                                  <item.icon
                                    className="flex-shrink-0 w-6 h-6 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/speaker" passHref>
              <a className="text-base font-medium text-gray-500 hover:text-gray-900">
                Speaker
              </a>
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? "text-gray-900" : "text-gray-500",
                      "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    )}
                  >
                    <span>Mehr</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? "text-gray-600" : "text-gray-400",
                        "ml-2 h-5 w-5 group-hover:text-gray-500"
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-50 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <Link key={item.name} href={item.href} passHref>
                              <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                                <item.icon
                                  className="flex-shrink-0 w-6 h-6 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                              Neuste Beiträge
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.slice(0, 3).map((post) => (
                                <li
                                  key={post.name}
                                  className="text-base truncate"
                                >
                                  <Link href={"/" + post.full_slug} passHref>
                                    <a className="font-medium text-gray-900 hover:text-gray-700">
                                      {post.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <Link href="/blog" passHref>
                              <a className="font-medium text-indigo-600 hover:text-indigo-500">
                                {" "}
                                Alle Beiträge anzeigen{" "}
                                <span aria-hidden="true">&rarr;</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
            <Link href="/register" passHref>
              <a className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900">
                Zugang reservieren
              </a>
            </Link>
            <Link href="https://www.gastronomy.world" passHref>
              <a
                target="_blank"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
              >
                zur Online Messe
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform md:hidden"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
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
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Menü schließen</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {topics.map((item) => (
                    <Link
                      key={item.name}
                      href={
                        "/blog/" +
                        slugify(item.name, {
                          lower: true,
                        })
                      }
                      passHref
                    >
                      <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
                        <HeroIcon
                          name={item.icon}
                          className="flex-shrink-0 w-6 h-6 text-indigo-600"
                          aria-hidden="true"
                          outline
                        />
                        <div className="ml-4">
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className="px-5 py-6 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link href="/speaker" passHref>
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Speaker
                  </a>
                </Link>

                <Link href="#">
                  <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Online Messe
                  </a>
                </Link>
                {resources.map((item) => (
                  <Link key={item.name} href={item.href} passHref>
                    <a className="text-base font-medium text-gray-900 hover:text-gray-700">
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
              <div>
                <Link href="/register" passHref>
                  <a className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
                    Zugang reservieren
                  </a>
                </Link>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  Sie suchen Lösungen zu den Themen?{" "}
                  <Link href="#" passHref>
                    <a
                      target="_blank"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      zur online Messe
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Header;
