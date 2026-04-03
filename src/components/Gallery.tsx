import { useRef, useState, useEffect, useCallback } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import styles from "./Gallery.module.css";

const images: { src: string; alt: string }[] = [
  { src: "/gallery/1-DSC_0786.jpg", alt: "Colorful geometric shapes — abstract photography close-up" },
  { src: "/gallery/1-DSC_0787.jpg", alt: "Vibrant geometric patterns — abstract macro photograph" },
  { src: "/gallery/1-DSC_0957.JPG", alt: "White paper flatlay with soft textures — minimalist abstract" },
  { src: "/gallery/1-DSC_1030.JPG", alt: "White paper curves — abstract photography" },
  { src: "/gallery/2-DSC_0906.JPG", alt: "Dark paper with geometric folds — abstract photography" },
  { src: "/gallery/2-DSC_0916.JPG", alt: "Dark paper angular shapes — geometric close-up" },
  { src: "/gallery/2-DSC_1065.jpg", alt: "White paper flowing curves — minimalist macro photograph" },
  { src: "/gallery/3-DSC_0738.JPG", alt: "Colorful geometric abstract with dramatic shadows" },
  { src: "/gallery/3-DSC_0748.JPG", alt: "Bold colors and shadow play — geometric abstract photography" },
  { src: "/gallery/3-DSC_0752.jpg", alt: "Vivid shapes and shadows — abstract macro close-up" },
  { src: "/gallery/3-DSC_0773.jpg", alt: "Colorful geometric composition — abstract photography" },
  { src: "/gallery/3-DSC_0845.jpg", alt: "Bright geometric abstract — color and form study" },
  { src: "/gallery/3-DSC_0850.JPG", alt: "Multicolored geometric patterns — abstract macro detail" },
  { src: "/gallery/4-DSC_1046.jpg", alt: "White paper curves with soft blur — abstract macro photography" },
  { src: "/gallery/4-DSC_1060-2.jpg", alt: "Flowing white paper curves — minimalist abstract photograph" },
  { src: "/gallery/4-DSC_1060-3.jpg", alt: "Dark paper with smooth curves — moody abstract close-up" },
  { src: "/gallery/5-DSC_0133.JPG", alt: "Pink bokeh light effect — abstract photography" },
  { src: "/gallery/5-DSC_0168.JPG", alt: "Purple spiral light movement — macro long exposure" },
  { src: "/gallery/5-DSC_0201-1.jpg", alt: "Golden particles in motion — macro light photography" },
  { src: "/gallery/DSC_0171.JPG", alt: "Luminography light painting in the forest — long exposure" },
  { src: "/gallery/DSC_0184.JPG", alt: "Forest luminography with glowing light trails" },
  { src: "/gallery/DSC_0185.JPG", alt: "Light painting experiment among trees — night photography" },
  { src: "/gallery/DSC_0254.jpg", alt: "Colorful light trails — luminography abstract experiment" },
  { src: "/gallery/DSC_0255.JPG", alt: "Vibrant luminography streaks — abstract light painting" },
  { src: "/gallery/DSC_0256.jpg", alt: "Multicolored light painting — long exposure abstract" },
  { src: "/gallery/DSC_1851.jpg", alt: "Circle of light in the dark — abstract light photography" },
  { src: "/gallery/DSC_1962.jpg", alt: "Watermelon with cosmetic sheet mask — creative photography" },
  { src: "/gallery/DSC_2027.jpg", alt: "Hand with blue manicured nails in pink water — creative still life" },
  { src: "/gallery/DSC_2136.JPG", alt: "Pomelo and apple with artificial eyelashes — conceptual photography" },
  { src: "/gallery/DSC_2369.jpg", alt: "Cosmetics flatlay on yellow background — creative product photography" },
  { src: "/gallery/DSC_3270.jpg", alt: "Pineapple with LED mask in red light — conceptual still life" },
  { src: "/gallery/DSC_3282.jpg", alt: "Pineapple with LED mask in blue light — creative photography" },
];

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
            key={img.src}
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
