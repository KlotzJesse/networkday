import Image from "next/image";
import Link from "next/link";
import React from "react";

export const RoomCard = ({ speaker }) => {
  return (
    <div className="w-full p-6 overflow-hidden bg-white shadow-lg max-w-1/4 rounded-xl ">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center justify-start flex-grow w-full ">
          <div className="w-10 h-10">
            <Image
              alt={speaker.name}
              src={speaker.profileImg}
              width="40"
              height="40"
              className="object-cover mx-auto rounded-full "
            />
          </div>
          <div className="flex flex-col items-start ml-4">
            <span className="text-sm text-gray-700">{speaker.name}</span>
            {/* <span className="text-sm font-light text-gray-400 ">
              Updated 3 min ago
            </span> */}
          </div>
        </div>
      </div>
      {/* <p className="mt-4 mb-2 text-lg text-gray-800 ">
        Wie Vegane Produkte Nachhaltigkeit beeinflussen
      </p> */}
      <p className="my-6 font-semibold tracking-wide text-gray-700 text-md ">
        {speaker.Topic.name}
      </p>

      <Link href={"/app/conference/" + speaker.meetingId} passHref>
        <a className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-blue-800 rounded-lg shadow-md hover:bg-blue-900 focus:ring-blue-700 focus:ring-offset-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
          Raum betreten
        </a>
      </Link>
    </div>
  );
};

export default RoomCard;
