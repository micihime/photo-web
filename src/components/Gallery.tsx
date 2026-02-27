import { useRef, useState, useEffect, useCallback } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styles from "./Gallery.module.css";

const imageModules = import.meta.glob<{ default: string }>(
  "../assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG}",
  { eager: true }
);

const images = Object.entries(imageModules).map(([path, mod]) => ({
  src: mod.default,
  alt: path.split("/").pop() ?? "",
}));

function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const imgs = el.querySelectorAll("img");
    imgs.forEach((img) => img.addEventListener("load", updateScrollState));

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      imgs.forEach((img) =>
        img.removeEventListener("load", updateScrollState)
      );
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.gallery}>
      {canScrollLeft && (
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          <IconChevronLeft size={32} />
        </button>
      )}
      <div className={styles.track} ref={scrollRef}>
        {images.map((img) => (
          <img
            key={img.alt}
            src={img.src}
            alt={img.alt}
            className={styles.image}
          />
        ))}
      </div>
      {canScrollRight && (
        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          <IconChevronRight size={32} />
        </button>
      )}
    </div>
  );
}

export default Gallery;
