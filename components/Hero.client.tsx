import Image from "next/image";
import Link from "next/link";

interface HeroBlok {
  Heading: string;
  Subtitle: string;
  Description: string;
  BackgroundImage: BackgroundImage;
}

interface BackgroundImage {
  filename: string;
}

interface HeroProps {
  blok: HeroBlok;
}

const Hero = ({ blok }: HeroProps) => {
  return (
    <div className="bg-white ">
      <div className="absolute inset-x-0 bottom-0 h-1/2" />
      <div className="relative mx-auto shadow-xl max-w-7xl sm:px-6 lg:px-8 sm:rounded-2xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            alt="HeaderImage"
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
          <p className="max-w-lg mx-auto mt-6 text-2xl font-bold tracking-tight text-center text-white sm:max-w-3xl">
            {" "}
            am 23.02.2022 ab 14:00 bis 15:00 Uhr{" "}
          </p>
          <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
              <Link href={"/auth/signin"} passHref>
                <a className="flex items-center justify-center px-4 py-3 text-base font-medium text-blue-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-blue-50 sm:px-8">
                  {" "}
                  Als Gast beitreten{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
