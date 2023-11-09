import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPublicClient, createWalletClient, custom, http } from "viem";
import { polygon } from "viem/chains";
import { useAccount } from "wagmi";
import getDefaultProfile from "../../../graphql/queries/getDefaultProfile";
import { setProfile } from "../../../redux/reducers/profileSlice";
import { Profile } from "../../../types/generated";
import createFollowModule from "../../../lib/lens/helpers/createFollowModules";
import followSig from "../../../lib/lens/helpers/followSig";
import { setModalOpen } from "../../../redux/reducers/modalOpenSlice";
import { setIndexModal } from "../../../redux/reducers/indexModalSlice";
import handleIndexCheck from "../../../lib/lens/helpers/handleIndexCheck";
import { setSuperFollow } from "../../../redux/reducers/superFollowSlice";
import { LENS_CREATORS } from "../../../lib/lens/constants";
import createProfilePicture from "../../../lib/lens/helpers/createProfilePicture";
import getProfiles from "../../../graphql/queries/getProfiles";
import { QuickProfilesInterface } from "../../../types/general.types";
import { RootState } from "../../../redux/store";

const useSuperCreator = () => {
  const publicClient = createPublicClient({
    chain: polygon,
    transport: http(),
  });
  const profile = useSelector(
    (state: RootState) => state.app.profileReducer.profile
  );
  const connected = useSelector(
    (state: RootState) => state.app.walletConnectedReducer.value
  );
  const [rain, setRain] = useState<boolean>(false);
  const [quickProfiles, setQuickProfiles] = useState<QuickProfilesInterface[]>(
    []
  );
  const [superCreatorLoading, setSuperCreatorLoading] =
    useState<boolean>(false);
  const dispatch = useDispatch();
  const { address } = useAccount();
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

  const refetchProfile = async (): Promise<void> => {
    try {
      const profile = await getDefaultProfile({
        for: address,
      });
      dispatch(setProfile(profile?.data?.defaultProfile as Profile));
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const followSuper = async () => {
    if (!profile || !connected) return;
    setSuperCreatorLoading(true);

    let res: `0x${string}` = "0x";
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
          (quickProfiles[i]?.followModule as any)?.amount?.asset?.address,
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

        await followSig(
          followers,
          clientWallet,
          publicClient,
          address as `0x${string}`,
          dispatch
        );
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

    try {
      setSuperCreatorLoading(false);
      await handleIndexCheck(res, dispatch);
      await refetchProfile();
      setSuperCreatorLoading(false);
      setRain(true);
      setTimeout(() => {
        setRain(false);
        dispatch(setSuperFollow(false));
      }, 4000);
    } catch (err: any) {}
    setSuperCreatorLoading(false);
  };

  useEffect(() => {
    if (rain) {
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
