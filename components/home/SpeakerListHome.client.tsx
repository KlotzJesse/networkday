import fetchData from "@lib/fetchData";
import useData from "@lib/useData";
import Image from "next/image";

export default function SpeakerListHome() {
  const speakerList = useData("speaker", () => fetchData(`/api/speakers`));

  return (
    <div className="bg-white">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Treffen mit Branchenexperten
            </h2>
            <p className="text-xl text-gray-500">
              Am #NetworkDay können Sie sich mit Experten aus Ihrer Branche
              treffen und sich gemeinsam über neue Trends zu unterhalten oder
              sich gemeinsam Austauschen.
            </p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              {speakerList.map((speaker) => (
                <li key={speaker.name}>
                  <div className="flex items-center space-x-4 lg:space-x-6">
                    <div className="relative w-16 h-16 rounded-full lg:w-20 lg:h-20">
                      <Image
                        layout="responsive"
                        className="rounded-full"
                        width="80"
                        height="80"
                        objectFit="cover"
                        src={speaker.profileImg}
                        alt={speaker.name}
                      />
                    </div>

                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{speaker.name}</h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
