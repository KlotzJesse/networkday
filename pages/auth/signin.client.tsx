import SEO from "@components/SEO.client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { MouseEvent, useRef } from "react";

export default function Signin() {
  let nameInput = useRef<HTMLInputElement>(null);
  let companyInput = useRef<HTMLInputElement>(null);
  let mailInput = useRef<HTMLInputElement>(null);

  const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
    if (null !== nameInput.current && !nameInput.current.value) {
      nameInput.current.classList.add("border");
      (nameInput.current.nextSibling! as HTMLElement).classList.remove(
        "hidden"
      );
    }
    if (null !== companyInput.current && !companyInput.current.value) {
      companyInput.current.classList.add("border");
      (companyInput.current.nextSibling! as HTMLElement).classList.remove(
        "hidden"
      );
    }
    if (null !== mailInput.current && !mailInput.current.value) {
      mailInput.current.classList.add("border");
      (mailInput.current.nextSibling! as HTMLElement).classList.remove(
        "hidden"
      );
    }
    signIn("credentials", {
      username: null !== nameInput.current && nameInput.current.value,
      company: null !== companyInput.current && companyInput.current.value,
      mail: null !== mailInput.current && mailInput.current.value,
      callbackUrl: "/app/conference",
    });
  };

  return (
    <section>
      <SEO canonical={`https://www.network-day.de/auth/signin`} />
      <div className="flex max-h-screen">
        <div
          className="h-screen md:w-2/6 md:p-10"
          style={{ backgroundColor: "#F8F5ED" }}
        >
          <div className="flex flex-col justify-center h-full p-10 bg-white rounded-xl">
            <Link href={"/"} passHref>
              <a
                aria-label="Zur Startseite"
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
            <div className="flex items-center py-8">
              <h1 className="text-2xl font-bold">
                ???? Willkommen beim #NetworkDay
              </h1>
            </div>
            <div className="flex-1">
              <div className="flex flex-col flex-1 w-full h-full">
                <div className="flex flex-col justify-end flex-1 md:justify-center">
                  <label className="text-xs leading-tight text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    ref={nameInput}
                    placeholder="Max Mustermann"
                    className="w-full px-5 py-3 my-2 border-red-700 rounded-xl bg-gray-50 hover:bg-gray-100"
                  ></input>
                  <p className="hidden mb-4 text-xs text-red-700">
                    Es muss ein Name angegeben werden.
                  </p>

                  <label className="text-xs leading-tight text-gray-600 ">
                    Firma
                  </label>
                  <input
                    type="text"
                    ref={companyInput}
                    placeholder="Hotel Gr??nheide"
                    className="w-full px-5 py-3 my-2 border-red-700 rounded-xl bg-gray-50 hover:bg-gray-100"
                  ></input>
                  <p className="hidden mb-4 text-xs text-red-700">
                    Es muss ein Firmenname angegeben werden.
                  </p>

                  <label className="text-xs leading-tight text-gray-600 ">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    ref={mailInput}
                    placeholder="max@musterfirma.de"
                    className="w-full px-5 py-3 my-2 border-red-700 rounded-xl bg-gray-50 hover:bg-gray-100"
                  ></input>
                  <p className="hidden mb-4 text-xs text-red-700">
                    Es muss eine g??ltige E-Mail angegeben werden.
                  </p>
                </div>

                <button
                  onClick={(e) => handleLogin(e)}
                  className="w-full py-3 my-5 text-white bg-gray-500 rounded-xl"
                >
                  Weiter als Gast
                </button>
              </div>
            </div>

            <p className="text-xs text-center text-gray-400">
              Mit der Anmeldung best??tigen Sie unsere{" "}
              <Link href="/privacy" passHref>
                <a className="underline decoration-yellow-500 hover:decoration-yellow-500/40 focus:decoration-yellow-500/40 motion-safe:transition-all motion-safe:duration-200">
                  Datenschutzrichtlinien
                </a>
              </Link>
              .
            </p>
          </div>
        </div>
        <div
          className="relative flex-1 hidden md:block h-100"
          style={{ backgroundColor: "#F8F5ED" }}
        >
          <Image
            priority
            alt="BackgroundImage"
            layout="fill"
            src="/BackgroundImage.gif"
          ></Image>
        </div>
      </div>
    </section>
  );
}
