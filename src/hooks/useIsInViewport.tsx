import React, { useEffect, useMemo, useState } from "react";

interface IUseIsInViewportProps {
  ref: React.RefObject<HTMLDivElement>;
}
export default function useIsInViewport({ ref }: IUseIsInViewportProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      ),
    []
  );

  useEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
