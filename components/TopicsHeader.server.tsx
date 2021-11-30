import Link from "next/link";
import slugify from "slugify";
import fetchData from "../lib/fetchData";
import useData from "../lib/useData";
import HeroIcon from "./HeroIcon";

export default function TopicsHeader() {
  const topics = useData("topics", () => fetchData(`/api/topics`));
  console.log(topics);

  return (
    <div>
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
              <p className="text-base font-medium text-gray-900">{item.name}</p>
              <p className="mt-1 text-sm text-gray-500">{item.description}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}