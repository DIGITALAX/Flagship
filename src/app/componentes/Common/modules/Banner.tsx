"use client";

import { FunctionComponent, JSX, useState } from "react";

const Banner: FunctionComponent<{ dict: any }> = ({
  dict,
}): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  if (!isVisible) return null;

  return (
    <div className="fixed z-50 w-full h-fit flex p-2">
      <div className="relative w-full h-fit flex flex-col sm:flex-row gap-2 items-center justify-between p-2 bg-[#fe85e3] text-[#FEE62F] font-grav overflow-hidden border-2 border-[#1b85de]">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 w-full h-full animate-[shimmer_3s_ease-in-out_infinite] -translate-x-full"></div>
        <div
          className="flex w-fit h-fit cursor-sewingHS order-2 sm:order-1"
          onClick={() => window.open("https://web3fashionweek.com", "_blank")}
        >
          {dict.common?.bannerText}
        </div>
        <div
          onClick={() => {
            setIsVisible(false);
            sessionStorage.setItem("web3FashionWeekBannerDismissed", "true");
          }}
          className="relative cursor-sewingHS w-6 h-6 flex items-center justify-center text-xl order-1 sm:order-2"
        >
          ×
        </div>
      </div>
    </div>
  );
};

export default Banner;
