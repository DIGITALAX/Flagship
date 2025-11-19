import { FunctionComponent, JSX } from "react";
import Image from "next/legacy/image";
import { useRouter, usePathname } from "next/navigation";
import { INFURA_GATEWAY_INTERNAL } from "@/app/lib/constants";
import Feature from "./Feature";

const Portals: FunctionComponent<{ dict: any }> = ({ dict }): JSX.Element => {
  const router = useRouter();
  const path = usePathname();
  return (
    <div className="relative w-full h-fit flex flex-col items-center justify-start gap-10">
      <div className="relative w-full h-fit flex items-center justify-between gap-7 flex-col sm:flex-row">
        {[
          {
            image: "QmUE1a7yAL1N6qsQ8vrBMRKKy46tEFwqBJXDAe2e7uHpPe",
            title: dict?.common?.distro,
            link: "/distro-kit",
          },
          {
            image: "QmVfYf8fnrfDPinTasbeN4SAiiGLCg47fAS8Edegg3168c",
            title: dict?.common?.log,
            link: "/build-log",
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
                className="relative w-full h-[26rem] border border-amarillo flex items-center justify-center cursor-sewingHS bg-amarillo"
                onClick={() => router.push(item.link)}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    draggable={false}
                    layout="fill"
                    objectFit="cover"
                    src={`${INFURA_GATEWAY_INTERNAL}${item.image}`}
                  />
                </div>
                <div className="absolute w-1/2 flex items-center justify-center h-8 bottom-0">
                  <Image
                    draggable={false}
                    layout="fill"
                    src={`${INFURA_GATEWAY_INTERNAL}QmZH2zUKZAPVbveywrG5GaApLgY4oTFvefrCkRtQvUeWRo`}
                  />
                  <div
                    className={`relative w-fit h-fit flex items-center top-1 justify-center font-bit text-white  ${
                      path?.includes("/es/")
                        ? "text-xxs lg:text-base"
                        : "text-xs md:text-lg"
                    }`}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="relative w-full h-fit flex items-center justify-center flex-col">
        <div className="relative w-full h-full flex items-center justify-between gap-10 flex-col sm:flex-row px-2">
          <div className="relative w-fit h-[4.5rem] flex items-end justify-end">
            <div className="relative w-[4.5rem] h-[3.9rem] flex items-center justify-center">
              <Image
                draggable={false}
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmXHebiLPG3ofJEzNMcXveTKwjGnZhCM9rztbGNNKQADju`}
              />
            </div>
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center font-bit text-white text-center text-xl">
            * ~ {dict?.common?.collect} ~ *
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center">
            <div className="relative w-[7.3rem] h-[4.5rem] flex items-center justify-center">
              <Image
                draggable={false}
                layout="fill"
                src={`${INFURA_GATEWAY_INTERNAL}QmbUzFRbM2skDzHajWEcGhmUVzrCRpLVMC9qoN2FTYTPqb`}
              />
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit flex items-center justify-center flex-col sm:flex-row">
          {[
            {
              image: "QmfAQag73312yoCehj62rLTMyCMWxNE5rK6ikHGDdXqHn7",
              title: "FGO",
              link: "https://fgo.themanufactory.xyz/",
            },

            {
              image: "QmRXPA7y26Vd6BALHLbTmoj7W2cYKNx4tuuHqzBoTv6fCP",
              title: dict?.common?.tokens,
              link: "/tokens",
            },
            {
              image: "QmYXNG1QarpiSBaVd6RYj4HEKgngt49zPMWdRxQQKdB9va",
              title: "FGO Futures",
              link: "https://futures.themanufactory.xyz/",
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
        <div className="relative w-full h-fit flex items-center justify-center flex-col sm:flex-row">
          {[
            {
              image: "QmbdN9PHYU5Lf467WqXRp32S4jp3kRnJYzS6EgztmEvUnT",
              title: "Coin Op",
              link: "https://coinop.themanufactory.xyz/",
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
        <div className="relative w-full h-fit flex items-center justify-center flex-col sm:flex-row">
          {[
            {
              image: "QmZ9jPeuD1SNRuFx2SjQSJGSR445FoMHV3WU9ddW7S7mb7",
              title: dict?.common?.studio,
              link: "https://npcstudio.xyz/",
            },

            {
              image: "Qmc1G3A1AdiUyjWsbX9MU8jinapN7Cy1mHb9kFsieysSno",
              title: "Kinora",
              link: "https://kinora.irrevocable.dev/",
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
        <div className="relative w-full h-fit flex items-center justify-center flex-col sm:flex-row">
          {[
            {
              image: "Qmbuv1tSD437oRELndaJHEjjGE73xgjJFaFdWzVCrtbADn",
              title: dict?.log?.comp,
              link: "/computational-manufacturing",
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
        <div className="relative w-full h-fit flex items-center justify-center flex-col sm:flex-row">
          {[
            {
              image: "QmTLX8JxYry2TZgwdbb4DL6HBvUsESgAC2mEhrQBBk4K3a",
              title: "TripleA",
              link: "https://triplea.agentmeme.xyz/",
            },
            {
              image: "QmNcrdusMU9qch4imSkCFtgSNXHVhd8fin8Ur6ySLKFERz",
              title: dict?.common?.manu,
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
        <div className="relative w-full h-fit flex items-center justify-center flex-col sm:flex-row">
          {[
            {
              image: "QmPRURdUCv5ArkhqyhHn6aicHbQVMATDyL1wzmT55bK2Nr",
              title: "Skyhunters",
              link: "https://skyhunters.agentmeme.xyz/",
            },
            {
              image: "QmbabgkCyusNAPNcM2XdJsw83FkBK35fxd7QLa8w4SEMJE",
              title: "Ionic",
              link: "https://ionic.digitalax.xyz/",
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
        <div className="relative w-4/5 md:w-1/2 h-fit flex items-center justify-center font-bit text-white text-sm sm:text-2xl">
          {dict?.common?.unbundle}
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
