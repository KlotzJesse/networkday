interface QuoteBlok {
  content: string;
}
interface QuoteProps {
  blok: QuoteBlok;
}

export default function Quote({ blok }: QuoteProps) {
  return <blockquote>{blok.content}</blockquote>;
}
