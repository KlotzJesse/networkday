import useEmblaCarousel from "embla-carousel-react";
import React, {
  MouseEventHandler,
  ReactChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

interface CarouselProps {
  children: ReactChildren;
}

export const Carousel = ({ children }: CarouselProps) => {
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div>
      <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">{children}</div>
        </div>
      </div>
      <div className="embla__dots">
        {React.Children.toArray(children)
          .slice(2)
          .map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
      </div>
    </div>
  );
};

interface DotButtonProps {
  selected: boolean;
  onClick: MouseEventHandler;
}

export const DotButton = ({ selected, onClick }: DotButtonProps) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export default Carousel;
