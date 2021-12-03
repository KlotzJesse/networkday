import fetchData from "@lib/fetchData";
import useData from "@lib/useData";
import Image from "next/image";
import Link from "next/link";

export default function Speaker() {
  const speakerList = useData("speaker", () => fetchData(`/api/speakers`));

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            Ausgewählte
            <br className="hidden md:block" />
            Speaker
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          Am #NetworkDay können Sie sich mit Experten aus Ihrer Branche treffen
          und sich gemeinsam über neue Trends zu unterhalten oder sich gemeinsam
          Austauschen.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
        {speakerList.map((speaker) => {
          return (
            <Link key={speaker.name} href={"/"} passHref>
              <a aria-label="View Item">
                <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                  <Image
                    width="720px"
                    height="700px"
                    className="object-cover w-full h-56 md:h-64 xl:h-80"
                    src={speaker.profileImg}
                    alt={speaker.name}
                  />
                  <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                    <p className="text-sm font-medium tracking-wide text-white">
                      {speaker.name}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
