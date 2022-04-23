import React from "react";
import { StyledImgLoading } from "./StyledImgLoading";

type Props = {
  src: string;
  alt: string;
  animation?: boolean;
  style: React.CSSProperties;
};

const ImgLoading = ({ src, alt, animation = false, style }: Props) => {
  return (
    <StyledImgLoading src={src} alt={alt} animation={animation} style={style} />
  );
};

export default ImgLoading;
