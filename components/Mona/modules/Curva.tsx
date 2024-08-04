import React, { useEffect, useRef } from "react";
import { INFURA_GATEWAY } from "@/lib/constants";

const Curve: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (pathRef.current && imageRef.current) {
        const scrollPercentage =
          window.scrollY / (400 * 16 - window.innerHeight);
        const pathLength = pathRef.current.getTotalLength();
        const point = pathRef.current.getPointAtLength(
          pathLength * scrollPercentage
        );

        imageRef.current.style.left = `${point.x}%`;
        imageRef.current.style.top = `${point.y / 64}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 6400"
      >
        <path
          ref={pathRef}
          d="M50,640 C70,1600 30,3200 50,4800 C70,5600 30,6080 50,6240"
          fill="none"
          // stroke="black"
          // strokeWidth="2"
          // vectorEffect="non-scaling-stroke"
        />
      </svg>
      <img
        ref={imageRef}
        src={`${INFURA_GATEWAY}/ipfs/QmYHVRpFQrvAS6PrrKw4WHGwXxoSiEdhAhXLhPa5MfLBeX`}
        alt="Cursor"
        className="fixed w-20 h-20 pointer-events-none"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default Curve;
