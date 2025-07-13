"use client";

import { FunctionComponent, JSX, useState } from "react";

const Banner: FunctionComponent<{ dict: any }> = ({
  dict,
}): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  if (!isVisible) return null;

  return (
    <div className="absolute z-50 w-full h-fit flex flex-row gap-2 items-center justify-between px-4 py-2 bg-[#30322f] text-[#FEE62F] font-grav overflow-hidden border-2 border-[#FEE62F]">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 w-full h-full animate-[shimmer_3s_ease-in-out_infinite] -translate-x-full"></div>
      <div
        className="flex w-fit h-fit cursor-sewingHS"
        onClick={() => window.open("https://web3fashionweek.com", "_blank")}
      >
        {dict.common?.bannerText}
      </div>
      <div
        onClick={() => {
          setIsVisible(false);
          sessionStorage.setItem("web3FashionWeekBannerDismissed", "true");
        }}
        className="relative cursor-sewingHS w-6 h-6 flex items-center justify-center text-xl"
      >
        ×
      </div>
    </div>
  );
};

export default Banner;
