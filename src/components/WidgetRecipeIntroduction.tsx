import { FunctionComponent } from "react";

export type WidgetRecipeIntroductionType = {
  className?: string;
};

const WidgetRecipeIntroduction: FunctionComponent<
  WidgetRecipeIntroductionType
> = ({ className = "" }) => {
  return (
    <div
      className={`h-[154px] rounded-xl bg-gray-200 flex flex-col items-start justify-start p-4 box-border gap-[18px] text-left text-xs text-darkgray font-pingfang-sc ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-row items-start justify-between">
        <div className="flex flex-col items-start justify-start">
          <img
            className="w-[74px] h-[74px] relative"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <img
          className="h-[41px] w-[41px] relative object-cover"
          loading="lazy"
          alt=""
          src="/appiconsplan@2x.png"
        />
      </div>
      <div className="w-[136px] h-[30px] flex flex-col items-start justify-end gap-1">
        <div className="self-stretch relative leading-[12px]">bibi食谱</div>
        <div className="self-stretch flex-1 relative text-sm leading-[14px] font-medium text-darkslategray flex items-center">
          食谱导入解析
        </div>
      </div>
    </div>
  );
};

export default WidgetRecipeIntroduction;
