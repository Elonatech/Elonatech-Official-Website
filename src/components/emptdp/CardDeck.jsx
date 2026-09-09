import React, { useRef, useState } from "react";

/* Manual horizontal card deck — shared by the ETMPDP Core and Ignite pages.
   Desktop: renders exactly as the passed-in grid classes dictate (no change).
   Mobile (<=576px, via CSS): the track becomes a scroll-snap row with a peek
   of the next card, and a dot indicator appears. No auto-advance — the reader
   stays in control.
   Pass `onDark` for decks that sit on a dark/navy section (light dots). */
const CardDeck = ({ className = "", onDark = false, children }) => {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const d = Math.abs(child.offsetLeft + child.offsetWidth / 2 - mid);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  const goTo = (i) => {
    const el = trackRef.current;
    const child = el && el.children[i];
    if (child) el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <div className={`emptdp-deck${onDark ? " emptdp-deck--on-dark" : ""}`}>
      <div
        className={`emptdp-deck-track ${className}`}
        ref={trackRef}
        onScroll={handleScroll}
      >
        {children}
      </div>
      <div className="emptdp-deck-dots">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`emptdp-deck-dot${i === active ? " is-active" : ""}`}
            aria-label={`Go to card ${i + 1}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardDeck;
