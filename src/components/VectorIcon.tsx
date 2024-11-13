import { FunctionComponent } from "react";

export type VectorIconType = {
  className?: string;
};

const VectorIcon: FunctionComponent<VectorIconType> = ({ className = "" }) => {
  return (
    <img
      className={`w-[74px] h-[74px] relative ${className}`}
      loading="lazy"
      alt=""
      src="/vector.svg"
    />
  );
};

export default VectorIcon;
