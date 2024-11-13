import { FunctionComponent } from "react";

export type Iconsheat24pxType = {
  className?: string;

  /** Variant props */
  property1?: "Variant2";
};

const Iconsheat24px: FunctionComponent<Iconsheat24pxType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-3.5 relative h-3.5 ${className}`}
      data-property1={property1}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]" />
      <img
        className="absolute h-3/4 w-[62.86%] top-[12.86%] right-[16.43%] bottom-[12.14%] left-[20.71%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/icon-shape.svg"
      />
    </div>
  );
};

export default Iconsheat24px;
