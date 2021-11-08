/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Header from "../components/Header";
import Speaker from "../components/Speaker";
import Exhibitors from "../components/Exhibitors";
import Steps from "../components/Steps";
import Footer from "../components/Footer";
import Topics from "../components/Topics";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="bg-gray-50">
        <div className="relative bg-white">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  alt="HeaderImage"
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=kayleigh-harrington-yhn4okt6ci0-unsplash.jpg"
                />
                <div
                  className="absolute inset-0 bg-green-900"
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Nachhaltigkeit</span>
                  <span className="block text-blue-100">
                    für mehr Wertschöpfung
                  </span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-100 sm:max-w-3xl">
                  {" "}
                  Netzwerken Sie mit Experten aus Ihrer Branche und Kollegen aus
                  dem Gastgewerbe, dem Care & Catering und Food-Handwerk
                  Bereich,
                  <br /> rundum die Welt der Nachhaltigkeit.{" "}
                </p>
                <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                  <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    <Link href={"/auth"} passHref>
                      <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50 sm:px-8">
                        {" "}
                        Jetzt beitreten{" "}
                      </a>
                    </Link>
                    <Link href={"/register"} passHref>
                      <a className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">
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

      <Topics></Topics>
      <Steps></Steps>
      <Speaker></Speaker>
      <Exhibitors></Exhibitors>
      <Footer></Footer>
    </div>
  );
}
