import { FunctionComponent } from "react";
import { PortalsProps } from "../types/home.types";
import Image from "next/legacy/image";
import { INFURA_GATEWAY } from "@/lib/constants";
import Feature from "./Feature";

const Portals: FunctionComponent<PortalsProps> = ({ router }): JSX.Element => {
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start gap-10">
      <div className="relative w-full h-fit flex items-center justify-between gap-7 flex-row">
        {[
          {
            image: "QmQWazrG328Amv9YP97wse1MAXSU4YrZuX9h2rvuxeGvxq",
            title: "Distro Kit",
            link: "/distro-kit"
          },
          {
            image: "QmVfYf8fnrfDPinTasbeN4SAiiGLCg47fAS8Edegg3168c",
            title: "Build Log",
            link: "/build-logs"
          },
        ].map(
          (
            item: {
              image: string;
              title: string;
              link: string;
            },
            index: number
          ) => {
            return (
              <div
                key={index}
                className="relative w-full h-[26rem] border border-amarillo flex items-center justify-center cursor-sewingHS"
                onClick={() => router.push(item.link)}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    draggable={false}
                    layout="fill"
                    objectFit="cover"
                    src={`${INFURA_GATEWAY}/ipfs/${item.image}`}
                  />
                </div>
                <div className="absolute w-1/2 flex items-center justify-center h-8 bottom-0">
                  <Image
                    draggable={false}
                    layout="fill"
                    src={`${INFURA_GATEWAY}/ipfs/QmZH2zUKZAPVbveywrG5GaApLgY4oTFvefrCkRtQvUeWRo`}
                  />
                  <div className="relative w-fit h-fit flex items-center top-1 justify-center font-bit text-white text-lg">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="relative w-full h-fit flex items-center justify-center flex-col">
        <div className="relative w-full h-full flex items-center justify-between gap-10 flex-row px-2">
          <div className="relative w-fit h-[4.5rem] flex items-end justify-end">
            <div className="relative w-[4.5rem] h-[3.9rem] flex items-center justify-center">
              <Image
                draggable={false}
                layout="fill"
                src={`${INFURA_GATEWAY}/ipfs/QmXHebiLPG3ofJEzNMcXveTKwjGnZhCM9rztbGNNKQADju`}
              />
            </div>
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center font-bit text-white text-center text-xl">
            * ~ Collect & create: The keys to the ecosystem ~ *
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center">
            <div className="relative w-[7.3rem] h-[4.5rem] flex items-center justify-center">
              <Image
                draggable={false}
                layout="fill"
                src={`${INFURA_GATEWAY}/ipfs/QmbUzFRbM2skDzHajWEcGhmUVzrCRpLVMC9qoN2FTYTPqb`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex items-center justify-center flex-row">
          {[
            {
              image: "QmZ9jPeuD1SNRuFx2SjQSJGSR445FoMHV3WU9ddW7S7mb7",
              title: "Kinora",
              link: "https://kinora.irrevocable.dev/",
            },
            {
              image: "QmQvYzGUxZ65CNL7GvcqphAeBegJ19r23nmu9uHmPQ6Dc6",
              title: "Chromadin",
              link: "https://www.chromadin.xyz/",
            },
          ].map(
            (
              item: {
                image: string;
                title: string;
                link: string;
              },
              index: number
            ) => {
              return (
                <Feature
                  key={index}
                  image={item.image}
                  title={item.title}
                  link={item.link}
                  router={router}
                />
              );
            }
          )}
        </div>
        <div className="relative w-full h-fit flex items-center justify-center flex-row">
          {[
            {
              image: "QmbdN9PHYU5Lf467WqXRp32S4jp3kRnJYzS6EgztmEvUnT",
              title: "Coin Op",
              link: "https://coinop.themanufactory.xyz/",
            },
            {
              image: "QmNcrdusMU9qch4imSkCFtgSNXHVhd8fin8Ur6ySLKFERz",
              title: "The Manufactory",
              link: "https://themanufactory.xyz/",
            },
          ].map(
            (
              item: {
                image: string;
                title: string;
                link: string;
              },
              index: number
            ) => {
              return (
                <Feature
                  key={index}
                  image={item.image}
                  title={item.title}
                  link={item.link}
                  router={router}
                />
              );
            }
          )}
        </div>
        <div className="relative w-full h-fit flex items-center justify-center flex-row">
          {[
            {
              image: "Qmbuv1tSD437oRELndaJHEjjGE73xgjJFaFdWzVCrtbADn",
              title: "Mona",
              link: "/build-logs",
            },
            {
              image: "QmQ81mzd6V5b57rXabEQQaWEg6zSxVY3tLHafx3XGVm14s",
              title: "Cypher",
              link: "https://cypher.digitalax.xyz/",
            },
          ].map(
            (
              item: {
                image: string;
                title: string;
                link: string;
              },
              index: number
            ) => {
              return (
                <Feature
                  key={index}
                  image={item.image}
                  title={item.title}
                  link={item.link}
                  router={router}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="relative w-full h-fit flex items-center justify-center flex-col gap-12 pt-10">
        <div className="relative w-1/2 h-fit flex items-center justify-center font-bit text-white text-2xl">
          To unbundle the everything store & stop this world's ruin you need
          good equipment... and a lot of practice
        </div>
        <div className="relative flex items-center justify-center flex-col w-full h-fit gap-1.5">
          <div
            id="foot1"
            className="relative flex items-center justify-center w-full h-1"
          ></div>
          <div
            id="foot2"
            className="relative flex items-center justify-center w-full h-1"
          ></div>
          <div
            id="foot3"
            className="relative flex items-center justify-center w-full h-1"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Portals;
