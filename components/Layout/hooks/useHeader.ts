import { DIGITALAX_ADDRESS } from "@/lib/constants";
import { Client } from "@xmtp/xmtp-js";
import { useEffect, useState } from "react";
import { createWalletClient, custom } from "viem";
import { polygon } from "viem/chains";

const useHeader = (address: `0x${string}` | undefined) => {
  const [messageLoading, setMessageLoading] = useState<boolean>(false);
  const [videoLoading, setVideoLoading] = useState<boolean>(false);
  const [currentVideo, setCurrentVideo] = useState<number>();
  const [message, setMessage] = useState<string>("Encrypt us a message?");
  const [client, setClient] = useState<Client | undefined>();

  const changeVideo = (index: number) => {
    setCurrentVideo(index);
  };

  const handleClient = async (): Promise<Client | undefined> => {
    try {
      const clientWallet = createWalletClient({
        account: address,
        chain: polygon,
        transport: custom((window as any).ethereum),
      });

      const client = await Client.create(clientWallet as any, {
        env: "production",
      });
      setClient(client);

      return client;
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (!currentVideo) {
      setCurrentVideo([0, 8].sort(() => Math.random() - 0.5)?.[0]);
    }
  }, []);

  const handleSendMessage = async (): Promise<void> => {
    if (!address) return;
    setMessageLoading(true);
    try {
      let validClient: Client | undefined = client;
      if (!validClient) {
        validClient = await handleClient();
      }

      const conversation = await validClient!.conversations?.newConversation(
        DIGITALAX_ADDRESS
      );

      if (message?.trim() !== "") {
        const data = conversation.send(message);

        if ((await data).sent) {
          setMessage("Message sent! We'll be in touch shortly.");
          setTimeout(() => {
            setMessage("");
          }, 6000);
        }
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
  };
};

export default useHeader;