import Link from "next/link";
import Image from "next/image";

export default function Auth() {
  return (
    <section>
      <div className="flex max-h-screen">
        <div
          className="md:w-2/6 md:p-10"
          style={{ backgroundColor: "#F8F5ED" }}
        >
          <div className="h-full p-10 bg-white rounded-xl">
            <Link href={"/register"} passHref>
              <a
                aria-label="Go home"
                title="Company"
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
            <h1 className="my-24 text-2xl font-bold">
              👋 Willkommen beim #NetworkDay
            </h1>
            <input
              type="text"
              placeholder="Max Mustermann"
              className="w-full px-5 py-3 my-2 rounded-xl bg-trueGray-50 hover:bg-gray-100"
            ></input>
            <input
              type="password"
              placeholder="Hotel Grünheide"
              className="w-full px-5 py-3 my-2 rounded-xl bg-trueGray-50 hover:bg-gray-100"
            ></input>
            <input
              type="email"
              placeholder="max@musterfirma.de"
              className="w-full px-5 py-3 my-2 rounded-xl bg-trueGray-50 hover:bg-gray-100"
            ></input>
            <button className="w-full py-3 my-5 text-white bg-coolGray-500 rounded-xl">
              Anmelden
            </button>
            <p className="text-sm text-center">
              Mit der Anmeldung bestätigen Sie unsere Nutzungsbedingungen und
              Datenschutzrichtlinien.
            </p>
          </div>
        </div>
        <div className="relative flex-1 hidden bg-orange-900 md:block h-100">
          <Image
            alt="BackgroundImage"
            layout="fill"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d32e3f70396087.5ba22dac2c486.gif"
          ></Image>
        </div>
      </div>
    </section>
  );
}
