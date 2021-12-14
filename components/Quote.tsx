interface QuoteBlok {
  content: string;
}
interface QuoteProps {
  blok: QuoteBlok;
}

export const Quote = ({ blok }: QuoteProps) => {
  return <blockquote>{blok.content}</blockquote>;
};

export default Quote;
