/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>#NetworkDay</title>
        <meta name="description" content="Virtual Conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white flex flex-col h-screen sticky items-center px-7 py-5 space-y-10 shadow">
        <div className="pb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
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
        <div className="bg-blue-900 p-2 rounded-xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="p-2 rounded-xl text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>

      <main className="flex flex-col flex-grow px-4 py-5 mx-auto md:px-24 lg:px-8">
        <div>
          <div className="relative flex w-1/4 mb-16 items-center">
            <span
              className="flex z-10
      h-full
      leading-snug
      font-normal
      text-center
      text-gray-300
      absolute
      bg-transparent
      rounded
      text-base
      items-center
      justify-center
      w-8
      pl-3
      py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search"
              className="px-3
      py-3
      placeholder-gray-300
      text-gray-600
      relative
      bg-white bg-white
      rounded
      text-sm
      border border-gray-400
      outline-none
      focus:outline-none focus:ring
      w-full
      pl-10"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex items-center justify-center w-full space-x-6">
            <div
              className="bg-white shadow-md rounded-3xl w-full mr-5"
              style={{ height: "600px" }}
            >
              <iframe
                title="BlueJeans"
                src="https://bluejeans.com/784330684/quick?embed=true&amp;chat=false&amp;ll=de&amp;parent=https://www.gastronomy.world&amp;sign_in=false&amp;footer=false&amp;apps=false&amp;room_pairing=false&amp;layout=true&amp;copy_link=false&amp;rating=false&amp;app_pitch=false&amp;lockMeetingControls=true&amp;locale=de"
                allow="autoplay; fullscreen; microphone; camera; display-capture"
                className="p-2 rounded-3xl"
                style={{ position: "relative", width: "100%", height: "100%" }}
              ></iframe>
            </div>
          </div>
          <div className="w-3/6 flex space-y-5 flex-col">
            <div className="bg-white rounded-xl p-3 space-y-3 shadow-md">
              <h2 style={{ fontWeight: "bold" }}>Kontaktmöglichkeiten</h2>
              <div className="flex cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-xl p-3 items-center space-x-5">
                <div className="bg-white p-3 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
                    />
                  </svg>
                </div>
                <p>Rückruf vereinbaren</p>
              </div>
              <div className="flex cursor-pointer hover:bg-gray-200 bg-gray-100 rounded-xl p-3 items-center space-x-5">
                <div className="bg-white p-3 rounded-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <p>Messestand öffnen</p>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-xl p-3 space-y-3 shadow-md">
              <div className="flex">
                <h2 className="flex-grow" style={{ fontWeight: "bold" }}>
                  Chats
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  />
                </svg>
              </div>
              <hr className="-mx-3" />
              <div className="flex-grow"><p>Test</p></div>
              <div className="flex space-x-2 p-3 border rounded-xl items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <input
                  className="flex-grow outline-none"
                  type="textarea"
                  placeholder="Type your message here"
                ></input>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
