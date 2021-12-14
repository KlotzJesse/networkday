interface TextBlok {
  content: string;
}
interface TextProps {
  blok: TextBlok;
}

export const Text = ({ blok }: TextProps) => {
  return <p>{blok.content}</p>;
};

export default Text;
