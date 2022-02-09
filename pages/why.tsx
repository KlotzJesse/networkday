import Image from "next/image";

interface WhyProps {}

export default function Why(props: WhyProps) {
  return (
    <div className="w-screen h-screen overflow-y-auto snap-y snap-mandatory">
      <section className="relative h-screen snap-start">
        <Image layout="fill" alt="" objectFit="cover" src="/bg.svg" />

        <div className="absolute right-0 w-2/5 transform -translate-y-1/2 top-1/2">
          <div className="prose prose-xl ">
            <p>
              <span className="font-bold">
                Nicht nur Netzwerken. Vernetze Dich mit Menschen aus deinem
                Beruf.
              </span>{" "}
              Sag hallo zu einem Event, das dich und dein Geschäft extrem weiter
              bringt. Bei der Eröffnung bekommst Du in Vorträgen neuen Input mit
              dem du dich dann in einzelnen Räumen mit Branchenexperten zu
              detaillierteren Themen austauschen kannst.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen snap-start">
        <div className="container px-4 py-16 mx-auto font-serif prose prose-2xl font-extralight sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:py-32">
          <div className="w-3/4 ">
            <hr className="w-[50px] border border-t-[3px] border-black not-prose" />
            <p>
              <span className="font-bold">
                Nicht nur Netzwerken. Vernetze Dich mit Menschen aus deinem
                Beruf.
              </span>{" "}
              Sag hallo zu einem Event, das dich und dein Geschäft extrem weiter
              bringt. Bei der Eröffnung bekommst Du in Vorträgen neuen Input mit
              dem du dich dann in einzelnen Räumen mit Branchenexperten zu
              detaillierteren Themen austauschen kannst.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen snap-start">
        <div className="container px-4 py-16 mx-auto font-serif prose prose-2xl font-extralight sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:py-32">
          <div className="w-3/4 ">
            <hr className="w-[50px] border border-t-[3px] border-black not-prose" />
            <p>
              Du weißt, wie wichtig eine starke Marke für das Marketing, für das
              Sales-Team und den Erfolg eines Unternehmens generell ist. Es ist
              eigentlich ganz einfach: je überzeugender die Brand ist, desto
              leichter feierst du Erfolge. Wir bauen seit Jahren zusammen mit
              unseren Kunden solche Marken auf, entwickeln sie weiter und helfen
              bei der Markenführung. Hier habe ich einen Guide für Dich
              entwickelt, der zeigt, wie es am effektivsten funktioniert.
            </p>
          </div>
        </div>
      </section>

      <section className="h-screen bg-yellow-300 snap-start">
        <p>
          <span>
            Nicht Netzwerken. Vernetze dich mit Menschen aus deinem Beruf.
          </span>{" "}
          Sag hallo zu einem Event, das dich und dein Geschäft extrem weiter
          bringt. Mit Vorträgen zur Eröffnung bekommst Du neuen Input mit dem du
          dich anschließend mit Branchenexperten zu detaillierteren Themen
          austauschen kannst.
        </p>
      </section>
    </div>
  );
}
