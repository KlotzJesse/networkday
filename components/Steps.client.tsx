export default function Step() {
  return (
    <div className=" bg-gray-50">
      <div className="pb-12 bg-white sm:pb-16">
        <div className="relative -top-5">
          <div className="relative px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div className="max-w-4xl mx-auto">
              <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    01.12.2021 ab 14:00 Uhr bis 15:00 Uhr
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    Wann?
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Digitales Netzwerk Event für den Außer-Haus-Markt
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    Was?
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Über www.network-day.de beitreten
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                    Wie?
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    //   <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
    //     <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
    //       <div className="w-px h-full bg-gray-300 lg:w-full lg:h-px" />
    //     </div>
    //     <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
    //       <div className="flex items-center justify-between mb-2">
    //         <p className="text-lg font-bold leading-5">Was</p>
    //         <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
    //           1
    //         </p>
    //       </div>
    //       <p className="text-sm text-gray-900">
    //         1 Stunde
    //         <br />
    //         3 Themen
    //         <br />
    //         Eigene Netzwerkräume
    //       </p>
    //     </div>
    //     <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
    //       <div className="flex items-center justify-between mb-2">
    //         <p className="text-lg font-bold leading-5">Wann</p>
    //         <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
    //           2
    //         </p>
    //       </div>
    //       <p className="text-sm text-gray-900">
    //         10. November, 2021
    //         <br />
    //         Wir laden Sie ein innerhalb einer Stunde aktuelle Trends
    //         kennenzulernen und sich auszutauschen auf Ihrer Fachveranstaltung.
    //       </p>
    //     </div>
    //     <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
    //       <div className="flex items-center justify-between mb-2">
    //         <p className="text-lg font-bold leading-5">Wo</p>
    //         <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
    //           3
    //         </p>
    //       </div>
    //       <p className="text-sm text-gray-900">
    //         auf www.network-day.de
    //         <br />
    //         per Handy oder PC
    //       </p>
    //     </div>
    //     <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
    //       <div className="flex items-center justify-between mb-2">
    //         <p className="text-lg font-bold leading-5">Wie</p>
    //         <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
    //           4
    //         </p>
    //       </div>
    //       <p className="text-sm text-gray-900">
    //         Sie öffnen einfach die Seite www.network-day.de und nehmen mit Ihrem
    //         Wunschgerät von überall aus der Welt teil.
    //       </p>
    //     </div>
    //   </div>
    //   <div className="text-center">
    //     <Link href={"/"} passHref>
    //       <a className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
    //         Jetzt anmelden
    //       </a>
    //     </Link>
    //   </div>
    // </div>
  );
}
