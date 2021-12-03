/* This example requires Tailwind CSS v2.0+ */
import Footer from "@components/Footer.server";
import Header from "@components/Header.client";
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

const supportLinks = [
  {
    name: "Vertrieb",
    href: "tel:+4981919375923",
    description:
      "Falls Sie Fragen an unser Verkaufsteam haben, freuen wir uns Sie gerne persönlich per Telefon zu betreuen..",
    icon: PhoneIcon,
  },
  {
    name: "Technische Hilfe",
    href: "tel:+4981919375923",
    description:
      "Bei technischen Problem und weiteren Fragen oder falls Sie Unterstützung benötigen, steht Ihnen jederzeit unser Service Team telefonisch zur Verfügung.",
    icon: SupportIcon,
  },
  {
    name: "Presse anfragen",
    href: "mailto:info@gastronomy.world",
    description:
      "Für Presse anfragen bitten wir Sie eine E-Mail an info@gastronomy.world zu senden.",
    icon: NewspaperIcon,
  },
];

export default function Help() {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <Image
            alt="Help"
            layout="fill"
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Hilfe Center
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-gray-300">
            Ratschläge und Antworten
          </p>
        </div>
      </div>

      <section
        className="relative z-10 px-4 pb-32 mx-auto -mt-32 max-w-7xl sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Kontaktieren
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white shadow-xl rounded-2xl"
            >
              <div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
                <div className="absolute top-0 inline-block p-5 transform -translate-y-1/2 bg-indigo-600 shadow-lg rounded-xl">
                  <link.icon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Kontaktieren<span aria-hidden="true"> &rarr;</span>
                </a>
                oder per Telefon: +49 8191 93759-23
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
