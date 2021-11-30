export const Heading = ({ blok }) => {
  console.log(blok);

  return (
    <h2 id={blok.title} className="group">
      <a
        className="absolute -ml-8 pr-1 pt-[0.3rem] pointer invisible group-hover:visible w-[80%]"
        href={`#${blok.title}`}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>
      </a>
      {blok.title}
    </h2>
  );
};

export default Heading;
