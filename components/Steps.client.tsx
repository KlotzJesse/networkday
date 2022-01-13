export default function Step() {
  return (
    <div className="pb-12 bg-white sm:pb-16">
      <div className="relative -top-5">
        <div className="relative px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div className="max-w-4xl mx-auto">
            <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
              <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-600">
                  23.02.2022 ab 14:00 Uhr bis 15:00 Uhr
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  Wann?
                </dd>
              </div>
              <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-600">
                  Digitales Netzwerk Event für den Außer-Haus-Markt
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                  Was?
                </dd>
              </div>
              <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-600">
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
  );
}
