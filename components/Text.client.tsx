interface TextBlok {
  content: string;
}
interface TextProps {
  blok: TextBlok;
}

export default function Text({ blok }: TextProps) {
  return <p>{blok.content}</p>;
}
