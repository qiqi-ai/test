import { FunctionComponent } from "react";

export type AppIconsplanType = {
  className?: string;
};

const AppIconsplan: FunctionComponent<AppIconsplanType> = ({
  className = "",
}) => {
  return (
    <img
      className={`h-[41px] w-[41px] relative object-cover ${className}`}
      loading="lazy"
      alt=""
      src="/appiconsplan@2x.png"
    />
  );
};

export default AppIconsplan;
