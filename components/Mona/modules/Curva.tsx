import { INFURA_GATEWAY } from "@/lib/constants";
import { SetStateAction, useEffect, useRef, useState } from "react";

const Curva: React.FC<{
  textColors: string[];
  setTextColors: (e: SetStateAction<string[]>) => void;
  tipo: boolean;
}> = ({ textColors, setTextColors, tipo }) => {
  const pathRef = useRef<SVGPathElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const pauseStartRef = useRef<number>(0);
  const pauseEndRef = useRef<number>(0);
  const textoEndRef = useRef<number>(0);
  const [fakeScroll, setFakeScroll] = useState<number>(0);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const totalParagraphs: number = 8;
  const scrollDeltaPerParagraph: number = 120;
  const colorChangeDelta: number = 60;

  useEffect(() => {
    const updatePausePositions = () => {
      const paragraphSection = document.getElementById("parrafo");
      const textoSection = document.getElementById("texto");
      if (paragraphSection && textoSection) {
        const rectParrafo = paragraphSection.getBoundingClientRect();
        const rectTexto = textoSection.getBoundingClientRect();

        pauseStartRef.current = window.scrollY + rectParrafo.top - 30;
        pauseEndRef.current =
          pauseStartRef.current +
          totalParagraphs * scrollDeltaPerParagraph +
          80;

        textoEndRef.current =
          rectTexto.bottom + totalParagraphs * scrollDeltaPerParagraph + 80;
      }
    };

    updatePausePositions();
    window.addEventListener("resize", updatePausePositions);
    return () => window.removeEventListener("resize", updatePausePositions);
  }, [tipo]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pauseStart = pauseStartRef.current;
      const pauseEnd = pauseEndRef.current;
      if (pathRef.current && imageRef.current) {
        if (
          scrollY < pauseStart ||
          pauseStart == 0 ||
          scrollY + fakeScroll > pauseEnd
        ) {
          document.body.classList.remove("stop-scrolling");

          if (
            scrollY < pauseStart ||
            pauseStart == 0 ||
            scrollY > textoEndRef.current
          ) {
            updateCoinPosition(scrollY);
          } else {
            updateCoinPosition(scrollY - pauseEnd - pauseStart);
          }

          if (scrollY + fakeScroll >= pauseEnd) {
            setFakeScroll(pauseEnd - pauseStart);
          } else if (scrollY < pauseStart) {
            setFakeScroll(0);
          }
        } else {
          document.body.classList.add("stop-scrolling");
        }
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const scrollY = window.scrollY;
      const pauseStart = pauseStartRef.current;
      const pauseEnd = pauseEndRef.current;

      if (pathRef.current && imageRef.current) {
        if (
          scrollY + 20 >= pauseStart &&
          scrollY + fakeScroll <= pauseEnd &&
          pauseStart !== 0 &&
          !(fakeScroll == 0 && event.deltaY < 0)
        ) {
          event.preventDefault();
          event.stopPropagation();

          setFakeScroll((prevFakeScroll) => {
            const delta = event.deltaY;
            const newFakeScroll = Math.max(
              0,
              Math.min(
                prevFakeScroll + delta,
                totalParagraphs * scrollDeltaPerParagraph
              )
            );
            const colorChangeIndex = Math.floor(
              newFakeScroll / colorChangeDelta
            );
            const newColors = textColors.map((_, index) => {
              const colorProgress = Math.max(
                0,
                Math.min(1, colorChangeIndex / 2 - index)
              );
              const color = Math.round(255 * colorProgress)
                .toString(16)
                .padStart(2, "0");
              return `#${color}${color}${color}`;
            });
            setTextColors(newColors);
            document.body.classList.remove("stop-scrolling");
            if (newFakeScroll === 0 && delta < 0) {
            } else if (
              newFakeScroll === totalParagraphs * scrollDeltaPerParagraph &&
              delta > 0
            ) {
              window.scrollTo(0, textoEndRef.current);
            }

            return newFakeScroll;
          });
        } else {
          document.body.classList.remove("stop-scrolling");
        }
      }
    };

    const updateCoinPosition = (realScrollY: number) => {
      if (pathRef.current && imageRef.current) {
        const scrollPercentage = realScrollY / (400 * 16 - window.innerHeight);
        const pathLength = pathRef.current.getTotalLength() * 0.4;
        const point = pathRef.current.getPointAtLength(
          pathLength * scrollPercentage
        );

        imageRef.current.style.left = `${point.x}%`;
        imageRef.current.style.top = `calc(10vh + ${point.y / 128}%)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    if (!scrolled) {
      window.scrollTo(0, 1);

      setScrolled(true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [textColors, setTextColors, fakeScroll, imageRef, pathRef]);

  return (
    <>
      <svg
        className="fixed inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 100 6400"
      >
        <path
          ref={pathRef}
          d="M50,0 C70,800 30,1600 50,2400 C30,3200 70,4000 50,4800 C70,5200 30,5600 50,6000 C30,6200 70,6300 50,6400"
          fill="none"
          // stroke="black"
        />
      </svg>
      <img
        ref={imageRef}
        src={`${INFURA_GATEWAY}/ipfs/QmYHVRpFQrvAS6PrrKw4WHGwXxoSiEdhAhXLhPa5MfLBeX`}
        alt="Cursor"
        className="fixed w-20 h-20 pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};

export default Curva;
