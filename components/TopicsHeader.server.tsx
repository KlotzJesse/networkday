import fetchData from "@lib/fetchData";
import slug from "@lib/slugify";
import useData from "@lib/useData";
import { Topic } from "@prisma/client";
import Link from "next/link";
import HeroIcon, { IconName } from "./HeroIcon";

export default function TopicsHeader() {
  const topics = useData("topics", () => fetchData(`/api/topics`));

  return (
    <div>
      {topics.map((item: Topic) => (
        <Link
          key={item.name}
          href={"/blog/" + slug(item.name as string)}
          passHref
        >
          <a className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50">
            <HeroIcon
              name={item.icon as IconName}
              className="flex-shrink-0 w-6 h-6 text-indigo-600"
              aria-hidden="true"
              outline
            />
            <div className="ml-4">
              <p className="text-base font-medium text-gray-900">{item.name}</p>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
