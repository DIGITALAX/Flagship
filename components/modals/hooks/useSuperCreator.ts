import { MutableRefObject, useEffect, useRef, useState } from "react";
import { PublicClient, createWalletClient, custom, http } from "viem";
import { polygon } from "viem/chains";
import getDefaultProfile from "../../../graphql/queries/getDefaultProfile";
import { setProfile } from "../../../redux/reducers/profileSlice";
import { Profile } from "../../../types/generated";
import createFollowModule from "../../../lib/lens/helpers/createFollowModules";
import followSig from "../../../lib/lens/helpers/followSig";
import { setModalOpen } from "../../../redux/reducers/modalOpenSlice";
import { setIndexModal } from "../../../redux/reducers/indexModalSlice";
import { LENS_CREATORS } from "../../../lib/lens/constants";
import createProfilePicture from "../../../lib/lens/helpers/createProfilePicture";
import getProfiles from "../../../graphql/queries/getProfiles";
import { QuickProfilesInterface } from "../../../types/general.types";
import { AnyAction, Dispatch } from "redux";
import { setRainRedux } from "../../../redux/reducers/rainSlice";
import { setSuperFollow } from "@/redux/reducers/superFollowSlice";

const useSuperCreator = (
  publicClient: PublicClient,
  dispatch: Dispatch<AnyAction>,
  address: `0x${string}` | undefined,
  rain: boolean
) => {
  const [quickProfiles, setQuickProfiles] = useState<QuickProfilesInterface[]>(
    []
  );
  const [superCreatorLoading, setSuperCreatorLoading] =
    useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<MutableRefObject<number | null>>(null);

  const getQuickProfiles = async () => {
    try {
      const profs = await getProfiles({
        where: {
          profileIds: LENS_CREATORS,
        },
      });
      const quickProfiles = (profs?.data?.profiles?.items as Profile[])?.map(
        (prof: Profile) => {
          return {
            id: prof.id,
            handle: prof.handle?.suggestedFormatted?.localName?.split("@")[1],
            image: createProfilePicture(prof?.metadata?.picture),
            followModule: prof?.followModule,
            name: prof?.handle?.localName,
            ownedBy: prof?.ownedBy?.address,
          };
        }
      );
      setQuickProfiles(quickProfiles as QuickProfilesInterface[]);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const followSuper = async () => {
    setSuperCreatorLoading(true);

    const batchSize = 15;
    const numBatches = Math.ceil(LENS_CREATORS.length / batchSize);
    for (let batchIndex = 0; batchIndex < numBatches; batchIndex++) {
      const batchStart = batchIndex * batchSize;
      const batchEnd = Math.min(
        LENS_CREATORS.length,
        (batchIndex + 1) * batchSize
      );
      let followers = [];

      for (let i = batchStart; i < batchEnd; i++) {
        const followModule = createFollowModule(
          quickProfiles[i]?.followModule?.type as any,
          (quickProfiles[i]?.followModule as any)?.amount?.value,
          (quickProfiles[i]?.followModule as any)?.amount?.asset?.address
        );

        followers.push({
          profileId: LENS_CREATORS[i],
          followModule,
        });
      }

      try {
        const clientWallet = createWalletClient({
          chain: polygon,
          transport: custom((window as any).ethereum),
        });

        const complete = await followSig(
          followers,
          clientWallet,
          publicClient,
          address as `0x${string}`,
          dispatch
        );

        if (complete) {
          dispatch(setRainRedux(true));
        } else {
          dispatch(setIndexModal("Unsuccessful. Please Try Again."));
        }
      } catch (err: any) {
        if (err.message.includes("You do not have enough")) {
          dispatch(
            setModalOpen({
              actionOpen: true,
              actionMessage: "Insufficient Balance to Follow.",
            })
          );
        } else {
          dispatch(setIndexModal("Unsuccessful. Please Try Again."));
        }
        console.error(err.message);
      }
    }
    setSuperCreatorLoading(false);
  };

  useEffect(() => {
    if (rain) {
      const timeoutId = setTimeout(() => {
        dispatch(setRainRedux(false));
        dispatch(setSuperFollow(false));
      }, 3000);
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      const width = window.innerWidth;
      const height = window.innerHeight;
      const particles: any[] = [];

      if (canvas && context) {
        canvas.width = width;
        canvas.height = height;

        class Particle {
          constructor() {
            (this as any).x = Math.random() * width;
            (this as any).y = 0;
            (this as any).speed = 3 + Math.random() * 7;
            (this as any).length = 30 + Math.random() * 60;
            (this as any).opacity = Math.random();
          }

          update() {
            (this as any).y += (this as any).speed;
            if ((this as any).y > height) {
              (this as any).y = 0;
              (this as any).x = Math.random() * width;
            }
          }

          draw() {
            context?.beginPath();
            context?.moveTo((this as any).x, (this as any).y);
            context?.lineTo(
              (this as any).x,
              (this as any).y + (this as any).length
            );
            context!.strokeStyle = `rgba(255, 215, 0, ${
              (this as any).opacity
            })`;
            context?.stroke();
          }
        }
        const createParticles = (count: number) => {
          for (let i = 0; i < count; i++) {
            particles.push(new Particle());
          }
        };

        const updateParticles = () => {
          context.clearRect(0, 0, width, height);
          particles.forEach((particle) => {
            particle.update();
            particle.draw();
          });

          (animationRef.current as any) =
            requestAnimationFrame(updateParticles);
        };

        createParticles(200);

        (animationRef.current as any) = requestAnimationFrame(updateParticles);

        const fadeOut = () => {
          context.fillStyle = "rgba(0, 0, 0, 0.1)";
          context.fillRect(0, 0, width, height);
          setTimeout(() => {
            cancelAnimationFrame(animationRef.current as any);
          }, 4000);
        };

        fadeOut();

        return () => {
          clearTimeout(timeoutId);
          cancelAnimationFrame(animationRef.current as any);
        };
      }
    }
  }, [rain]);

  useEffect(() => {
    if (quickProfiles?.length < 1) {
      getQuickProfiles();
    }
  }, []);

  return { superCreatorLoading, followSuper, canvasRef, rain, quickProfiles };
};

export default useSuperCreator;
