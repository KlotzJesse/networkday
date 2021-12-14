export default function readingTime(text: string) {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return readTime == 1 ? "1 Minute lesen" : `${readTime} Minuten lesen`;
}
