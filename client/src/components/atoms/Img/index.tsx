import React from "react";
import * as Sc from "./style";

type ImgProps = {
  /** Image url. If src has nothing, the image shows "no image available" image. */
  src?: string;
  /** Alt Tag */
  alt?: string;
  /** CSS Property about how the image should be resized to fit its container. */
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down" | string;
  isCircle?: boolean;
};

function Img({
  src,
  alt,
  objectFit = "contain",
  isCircle = false
}: ImgProps): React.ReactElement {
  src =
    src?.length === 0 || src === undefined
      ? "https://image.shutterstock.com/image-vector/no-image-available-icon-photo-260nw-1251146734.jpg"
      : src;
  return (
    <Sc.StyledImg
      src={src}
      alt={alt}
      objectFit={objectFit}
      isCircle={isCircle}
    />
  );
}

Img.defaultProps = {
  src:
    "https://image.shutterstock.com/image-vector/no-image-available-icon-photo-260nw-1251146734.jpg"
};

export default Img;
