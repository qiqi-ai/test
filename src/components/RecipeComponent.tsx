import { FunctionComponent } from "react";
import Iconsheat24px from "./Iconsheat24px";

export type RecipeComponentType = {
  className?: string;

  /** Variant props */
  property1?: "Variant2";
};

const RecipeComponent: FunctionComponent<RecipeComponentType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`w-[152px] h-[137px] rounded-xl bg-gray-200 flex flex-col items-start justify-start p-1 box-border text-left text-sm text-white font-pingfang-sc ${className}`}
      data-property1={property1}
    >
      <div className="self-stretch flex-1 rounded-xl flex flex-col items-center justify-between pt-0 px-0 pb-2.5 bg-[url('/public/food-information@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="self-stretch rounded-xl [background:linear-gradient(180deg,_rgba(30,_30,_30,_0.36),_rgba(153,_153,_153,_0))] h-[59.2px] flex flex-col items-start justify-start pt-2.5 px-2.5 pb-0 box-border">
          <div className="self-stretch h-9 overflow-hidden shrink-0 flex flex-row items-start justify-center flex-wrap content-start">
            <a className="[text-decoration:none] flex-1 relative leading-[18px] font-semibold text-[inherit] mix-blend-normal">
              可颂三明治 森林早餐
            </a>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-end py-0 px-2.5 text-xs font-pingfang-hk">
          <div className="self-stretch [backdrop-filter:blur(14.4px)] rounded-[36px] bg-gray-100 h-7 flex flex-row items-center justify-center gap-0.5">
            <div className="flex flex-row items-center justify-start gap-0.5">
              <img
                className="w-3.5 relative h-3.5"
                alt=""
                src="/iconstime-24px-2.svg"
              />
              <div className="relative leading-[12px] mix-blend-normal">
                12min
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-0.5">
              <Iconsheat24px property1="Variant2" />
              <a className="[text-decoration:none] w-[45px] relative leading-[12px] text-[inherit] inline-block mix-blend-normal">
                620kcal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeComponent;