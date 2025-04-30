import { DIGITALAX_ADDRESS, idiomaAIndice, Idiomas } from "@/app/lib/constants";
import { chains } from "@lens-chain/sdk/viem";
import { Client } from "@xmtp/browser-sdk";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createWalletClient, custom, toBytes } from "viem";

const useHeader = (address: `0x${string}` | undefined, dict: any) => {
  const path = usePathname();
  const router = useRouter();
  const [messageLoading, setMessageLoading] = useState<boolean>(false);
  const [videoLoading, setVideoLoading] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<number>();
  const [message, setMessage] = useState<string>(dict?.common?.encrypt);
  const [client, setClient] = useState<Client | undefined>();
  const [chosenLanguage, setChosenLanguage] = useState<number>(
    idiomaAIndice[(path.match(/(?<=\/)(en|es)(?=\/)/)?.[0] ?? "en") as Idiomas]
  );

  const changeVideo = (index: number) => {
    setCurrentVideo(index);
  };

  const handleClient = async (): Promise<Client | undefined> => {
    try {
      const clientWallet = createWalletClient({
        account: address,
        chain: chains.mainnet,
        transport: custom((window as any).ethereum),
      });

      const client = await Client.create(
        {
          type: "EOA",
          getIdentifier: () => ({
            identifier: address!.toLowerCase(),
            identifierKind: "Ethereum",
          }),
          signMessage: async (message: string) => {
            const signature = await clientWallet.signMessage({
              account: address!,
              message,
            });
            return toBytes(signature);
          },
        },
        {
          env: "production",
        }
      );

      setClient(client);

      return client;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (!currentVideo) {
      setCurrentVideo(0);
    }
  }, []);

  const changeLanguage = (lang: string) => {
    const segments = path.split("/");
    segments[1] = lang;
    const newPath = segments.join("/");

    document.cookie = `NEXT_LOCALE=${lang}; path=/; SameSite=Lax`;

    router.push(newPath);
  };

  const handleSendMessage = async (): Promise<void> => {
    if (!address) return;
    setMessageLoading(true);
    try {
      let validClient: Client | undefined = client;
      if (!validClient) {
        validClient = await handleClient();
      }
      const conversation = await validClient!.conversations.newDm(
        DIGITALAX_ADDRESS
      );

      if (message?.trim() !== "") {
        await conversation.send(message);
        setMessage(dict.common.sent);
        setTimeout(() => {
          setMessage("");
        }, 6000);
      }
    } catch (err: any) {
      console.error(err.message);
    }
    setMessageLoading(false);
  };

  return {
    videoLoading,
    currentVideo,
    changeVideo,
    setVideoLoading,
    handleSendMessage,
    message,
    messageLoading,
    setMessage,
    chosenLanguage,
    changeLanguage,
    setChosenLanguage,
  };
};

export default useHeader;
