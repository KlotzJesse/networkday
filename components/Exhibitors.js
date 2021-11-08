export default function Exhibitors() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4 uppercase">
            Partners / They support us
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste."
        </p>
      </div>
      <section className="px-4 py-24 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-2 text-center lg:grid-cols-4">
          <div className="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light">
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:format=png/path/s4c680ef60d53e150/image/i914c634a47327602/version/1623683275/image.png"
              alt="Homann Foodservice"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light">
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:format=jpg/path/s4c680ef60d53e150/image/i5f9877dbfed40f11/version/1623683275/image.jpg"
              alt="Byodo Cateringline"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light">
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:format=png/path/s4c680ef60d53e150/image/i7c232e2c1c0aafe3/version/1634893175/image.png"
              alt="Brunner-Anliker"
              className="block object-contain h-16"
            />
          </div>
          <div className="flex items-center justify-center p-6 bg-opacity-25 bg-primary-light">
            <img
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=150x150:format=png/path/s4c680ef60d53e150/image/i31e051902fb25fcd/version/1623683275/image.png"
              alt="Ecolab"
              className="block object-contain h-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
