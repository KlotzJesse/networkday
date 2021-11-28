import Image from "next/image";
import Link from "next/link";

const Hero = ({ blok }) => {
  return (
    <div className="bg-gray-50">
      <div className="relative bg-white">
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <Image
                priority
                layout="fill"
                alt="HeaderImage"
                className="object-cover w-full h-full"
                src={blok.BackgroundImage.filename}
              />
              <div
                className="absolute inset-0 bg-green-900"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
                <span className="block text-white">{blok.Heading}</span>
                <span className="block text-blue-100">{blok.Subtitle}</span>
              </h1>
              <p className="max-w-lg mx-auto mt-6 text-xl text-center text-blue-100 sm:max-w-3xl">
                {" "}
                {blok.Description}{" "}
              </p>
              <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link href={"/auth/signin"} passHref>
                    <a className="flex items-center justify-center px-4 py-3 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50 sm:px-8">
                      {" "}
                      Jetzt beitreten{" "}
                    </a>
                  </Link>
                  <Link href={"/register"} passHref>
                    <a className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-blue-500 border border-transparent rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                      {" "}
                      Zugang reservieren{" "}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
