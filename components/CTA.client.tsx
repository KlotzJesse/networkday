import { ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";

export default function CTA() {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="flex flex-col w-full bg-gray-800 md:flex-row not-prose rounded-2xl">
        <div className="relative md:w-1/2">
          <Image
            className="object-cover w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?i?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=608&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
            alt="Netzwerk Plattform"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="px-4 py-12 md:w-1/2 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:pl-10">
            <h2 className="text-base font-semibold tracking-wider text-gray-300 uppercase">
              Jetzt netzwerken
            </h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Netzwerken beim Digital Event wie auf der Messe
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Lassen Sie sich gerne zu dem nächsten Event erinnern oder betreten
              Sie direkt die Hauptbühne und tauschen sich gemeinsam zu den
              Themen aus.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="/auth/signin"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50"
                >
                  Als Gast beitreten
                  <ExternalLinkIcon
                    className="w-5 h-5 ml-3 -mr-1 text-gray-400"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
