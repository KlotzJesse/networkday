import { MouseEvent, ReactChildren, useRef, useState } from "react";

interface ScrollDragProps {
  children: ReactChildren;
}

export const ScrollDrag = (props: ScrollDragProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [isScrolling, setIsScrolling] = useState(false);
  const [clientX, setClientX] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsScrolling(true);
    setClientX(e.pageX - e.currentTarget.offsetLeft);
    setScrollX(e.currentTarget.scrollLeft);
  };

  const onMouseUp = (e: MouseEvent<HTMLDivElement>) => {
    setIsScrolling(false);
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isScrolling) {
      e.preventDefault();
      const x = e.pageX - ref.current!.offsetLeft;
      const walk = x - clientX;
      ref.current!.scrollLeft = scrollX - walk;
    }
  };

  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        className={`flex w-full gap-3 overflow-x-auto snap-x pb-14 scroll-smooth`}
      >
        {/* <div className="w-1/3 cursor-grabbing snap-center shrink-0">
          <img
            className="h-40 bg-white rounded-lg shadow-xl pointer-events-none shrink-0"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div>
        <div className="w-1/3 cursor-grabbing snap-center shrink-0">
          <img
            className="h-40 bg-white rounded-lg shadow-xl pointer-events-none shrink-0 w-80"
            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div>
        <div className="w-1/3 ursor-grabbing snap-center shrink-0">
          <img
            className="h-40 bg-white rounded-lg shadow-xl pointer-events-none shrink-0 w-80"
            src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div>
        <div className="w-1/3 cursor-grabbing snap-center shrink-0">
          <img
            className="h-40 bg-white rounded-lg shadow-xl pointer-events-none shrink-0 w-80"
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div>
        <div className="w-1/3 cursor-grabbing snap-center shrink-0">
          <img
            className="h-40 bg-white rounded-lg shadow-xl pointer-events-none shrink-0 w-80"
            src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div>
        <div className="w-1/3 cursor-grabbing snap-center shrink-0">
          <img
            className="h-40 bg-white rounded-lg shadow-xl pointer-events-none shrink-0 w-80"
            src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
          />
        </div> */}
        {props.children}
      </div>
    </div>
  );
};

export default ScrollDrag;
