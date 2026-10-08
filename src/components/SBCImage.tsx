import { useState } from "react";
import type { SBCImg } from "../data/content";

interface Props {
  image: SBCImg;
  className?: string;
  eager?: boolean;
  sizes?: string;
}

/** Renders high-resolution Sky Beach Club photography with a photo fallback. */
export default function SBCImage({
  image,
  className = "",
  eager = false,
}: Props) {
  const [src, setSrc] = useState(image.src);
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={image.alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      onLoad={() => setLoaded(true)}
      onError={() => {
        if (src !== image.fallback) setSrc(image.fallback);
      }}
      className={`img-fade ${loaded ? "loaded" : ""} ${className}`}
    />
  );
}
