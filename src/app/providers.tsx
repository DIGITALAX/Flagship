"use client";
import {
  createContext,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { HEART_COLORS, THEME_COLORS } from "./lib/constants";
import { WagmiProvider, createConfig, http } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { chains } from "@lens-chain/sdk/viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FullScreenVideo } from "./componentes/Common/types/common.types";
import { mainnet, PublicClient } from "@lens-protocol/client";

const queryClient = new QueryClient();

export const ModalContext = createContext<
  | {
      lensClient: PublicClient | undefined;
      setFullScreenVideo: (e: SetStateAction<FullScreenVideo>) => void;
      fullScreenVideo: FullScreenVideo;
      heartColor: string;
      rewind: RefObject<HTMLDivElement | null>;
      handleRewind: () => void;
      changeColor: () => void;
      timeline: boolean;
      setTimeline: (e: SetStateAction<boolean>) => void;
      setBookMessage: (
        e: SetStateAction<{ open: boolean; transparent: boolean }>
      ) => void;
      screen: { title: string; index: number; description: string } | undefined;
      setScreen: (
        e: SetStateAction<
          { title: string; index: number; description: string } | undefined
        >
      ) => void;
      bookMessage: { open: boolean; transparent: boolean };
      setImageViewer: (
        e: SetStateAction<
          | {
              type: string;
              content: string;
            }
          | undefined
        >
      ) => void;
      imageViewer:
        | {
            type: string;
            content: string;
          }
        | undefined;
    }
  | undefined
>(undefined);

export const config = createConfig(
  getDefaultConfig({
    appName: "DIGITALAX",
    walletConnectProjectId: process.env
      .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
    appUrl: "https://digitalax.xyz",
    appIcon: "https://digitalax.xyz/favicon.ico",
    chains: [chains.mainnet],
    transports: {
      [chains.mainnet.id]: http("https://rpc.lens.xyz"),
    },
    ssr: true,
  })
);

export default function Providers({ children }: { children: React.ReactNode }) {
  const rewind = useRef<null | HTMLDivElement>(null);
  const handleRewind = (): void => {
    rewind.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [lensClient, setLensClient] = useState<PublicClient | undefined>();
  const [screen, setScreen] = useState<{
    title: string;
    index: number;
    description: string;
  }>();
  const [fullScreenVideo, setFullScreenVideo] = useState<FullScreenVideo>({
    open: false,
    allVideos: [],
    index: 0,
    volume: 0.5
  });
  const [imageViewer, setImageViewer] = useState<
    | {
        type: string;
        content: string;
      }
    | undefined
  >();
  const [bookMessage, setBookMessage] = useState<{
    open: boolean;
    transparent: boolean;
  }>({
    open: false,
    transparent: false,
  });
  const [timeline, setTimeline] = useState<boolean>(false);
  const [color, setColor] = useState<string>(THEME_COLORS[0]);
  const [heartColor, setHeartColor] = useState<string>(THEME_COLORS[0]);
  const changeColor = () => {
    if (THEME_COLORS.indexOf(color) < 9) {
      setColor(THEME_COLORS[THEME_COLORS.indexOf(color) + 1]);
      setHeartColor(HEART_COLORS[THEME_COLORS.indexOf(color) + 1]);
      localStorage.setItem(
        "digi-theme-color",
        THEME_COLORS[THEME_COLORS.indexOf(color) + 1]
      );
    } else {
      setColor(THEME_COLORS[0]);
      setHeartColor(HEART_COLORS[0]);
      localStorage.setItem("digi-theme-color", THEME_COLORS[0]);
    }
  };

  useEffect(() => {
    if (!lensClient) {
      setLensClient(
        PublicClient.create({
          environment: mainnet,
          storage: window.localStorage,
        })
      );
    }
  }, []);

  useEffect(() => {
    if (window) {
      const storageColor = localStorage.getItem("digi-theme-color");
      if (storageColor) {
        setColor(storageColor);
        setHeartColor(HEART_COLORS[THEME_COLORS.indexOf(storageColor)]);
      }
    }
    console.log(`888       888                                    d8b 888                                                                  888                                           
    888   o   888                                    Y8P 888                                                                  888                                           
    888  d8b  888                                        888                                                                  888                                           
    888 d888b 888  .d88b.      888  888  888 888d888 888 888888  .d88b.      88888b.  888d888  .d88b.  88888b.d88b.  88888b.  888888 .d8888b                                
    888d88888b888 d8P  Y8b     888  888  888 888P"   888 888    d8P  Y8b     888 "88b 888P"   d88""88b 888 "888 "88b 888 "88b 888    88K                                    
    88888P Y88888 88888888     888  888  888 888     888 888    88888888     888  888 888     888  888 888  888  888 888  888 888    "Y8888b.                               
    8888P   Y8888 Y8b.         Y88b 888 d88P 888     888 Y88b.  Y8b.         888 d88P 888     Y88..88P 888  888  888 888 d88P Y88b.       X88 d8b                           
    888P     Y888  "Y8888       "Y8888888P"  888     888  "Y888  "Y8888      88888P"  888      "Y88P"  888  888  888 88888P"   "Y888  88888P' 88P                           
                                                                             888                                     888                      8P                            
                                                                             888                                     888                      "                             
         888                   d8b                                888        888  888                        .d8888b.888                                                    
         888                   Y8P                                888             888                       d88P  "88b                                                      
         888                                                      888             888                       Y88b. d88P                                                      
     .d88888  .d88b.  .d8888b  888  .d88b.  88888b.      .d8888b  888888 888  888 888  .d88b.  .d8888b       "Y8888P"                                                       
    d88" 888 d8P  Y8b 88K      888 d88P"88b 888 "88b     88K      888    888  888 888 d8P  Y8b 88K          .d88P88K.d88P                                                   
    888  888 88888888 "Y8888b. 888 888  888 888  888     "Y8888b. 888    888  888 888 88888888 "Y8888b.     888"  Y888P"                                                    
    Y88b 888 Y8b.          X88 888 Y88b 888 888  888          X88 Y88b.  Y88b 888 888 Y8b.          X88     Y88b .d8888b                                                    
     "Y88888  "Y8888   88888P' 888  "Y88888 888  888      88888P'  "Y888  "Y88888 888  "Y8888   88888P'      "Y8888P" Y88b                                                  
                                        888                                   888                                                                                           
                                   Y8b d88P                              Y8b d88P                                                                                           
                                    "Y88P"                                "Y88P"                                                                                            
    888               d8b 888      888                            888               .d888                                                                                   
    888               Y8P 888      888                            888              d88P"                                                                                    
    888                   888      888                            888              888                                                                                      
    88888b.  888  888 888 888  .d88888      .d8888b  .d88b.   .d88888  .d88b.      888888  .d88b.  888d888                                                                  
    888 "88b 888  888 888 888 d88" 888     d88P"    d88""88b d88" 888 d8P  Y8b     888    d88""88b 888P"                                                                    
    888  888 888  888 888 888 888  888     888      888  888 888  888 88888888     888    888  888 888                                                                      
    888 d88P Y88b 888 888 888 Y88b 888     Y88b.    Y88..88P Y88b 888 Y8b.         888    Y88..88P 888                                                                      
    88888P"   "Y88888 888 888  "Y88888      "Y8888P  "Y88P"   "Y88888  "Y8888      888     "Y88P"  888                                                                      
                              888                               888                                                              888                                        
                              888                               888                                                              888                                        
                              888                               888                                                              888                                        
    88888b.  888d888  .d88b.  888888  .d88b.   .d8888b  .d88b.  888         .d88b.   .d8888b  .d88b.  .d8888b  888  888 .d8888b  888888  .d88b.  88888b.d88b.  .d8888b      
    888 "88b 888P"   d88""88b 888    d88""88b d88P"    d88""88b 888        d8P  Y8b d88P"    d88""88b 88K      888  888 88K      888    d8P  Y8b 888 "888 "88b 88K          
    888  888 888     888  888 888    888  888 888      888  888 888 888888 88888888 888      888  888 "Y8888b. 888  888 "Y8888b. 888    88888888 888  888  888 "Y8888b.     
    888 d88P 888     Y88..88P Y88b.  Y88..88P Y88b.    Y88..88P 888        Y8b.     Y88b.    Y88..88P      X88 Y88b 888      X88 Y88b.  Y8b.     888  888  888      X88     
    88888P"  888      "Y88P"   "Y888  "Y88P"   "Y8888P  "Y88P"  888         "Y8888   "Y8888P  "Y88P"   88888P'  "Y88888  88888P'  "Y888  "Y8888  888  888  888  88888P'     
    888           888                                                           888       .d8888b.       .d888      888          888      d8b                               
    888           888                                                           888      d88P  Y88b     d88P"  Y8b d88P          888      Y8P                               
    888           888                                                           888           .d88P     888     "Y88P"           888                                        
    888  888  888 88888b.   .d88b.  888d888  .d88b.      888  888  888  .d88b.  88888b.      8888"      888888  8888b.  .d8888b  88888b.  888  .d88b.  88888b.              
    888  888  888 888 "88b d8P  Y8b 888P"   d8P  Y8b     888  888  888 d8P  Y8b 888 "88b      "Y8b.     888        "88b 88K      888 "88b 888 d88""88b 888 "88b             
    888  888  888 888  888 88888888 888     88888888     888  888  888 88888888 888  888 888    888     888    .d888888 "Y8888b. 888  888 888 888  888 888  888             
    Y88b 888 d88P 888  888 Y8b.     888     Y8b.         Y88b 888 d88P Y8b.     888 d88P Y88b  d88P     888    888  888      X88 888  888 888 Y88..88P 888  888             
     "Y8888888P"  888  888  "Y8888  888      "Y8888       "Y8888888P"   "Y8888  88888P"   "Y8888P"      888    "Y888888  88888P' 888  888 888  "Y88P"  888  888             
     .d8888b.         888          888                      888                                        888      d8b                                                         
    d88P  "88b        888          888                      888                                        888      Y8P                                                         
    Y88b. d88P        888          888                      888                                        888                                                                  
     "Y8888P"         888  8888b.  888888  .d88b.  88888b.  888888     88888b.d88b.   8888b.   .d8888b 88888b.  888 88888b.   .d88b.  .d8888b                               
    .d88P88K.d88P     888     "88b 888    d8P  Y8b 888 "88b 888        888 "888 "88b     "88b d88P"    888 "88b 888 888 "88b d8P  Y8b 88K                                   
    888"  Y888P"      888 .d888888 888    88888888 888  888 888        888  888  888 .d888888 888      888  888 888 888  888 88888888 "Y8888b.                              
    Y88b .d8888b      888 888  888 Y88b.  Y8b.     888  888 Y88b.      888  888  888 888  888 Y88b.    888  888 888 888  888 Y8b.          X88                              
     "Y8888P" Y88b    888 "Y888888  "Y888  "Y8888  888  888  "Y888     888  888  888 "Y888888  "Y8888P 888  888 888 888  888  "Y8888   88888P'                              
         888                                         888 d8b          888                                                                                                   
         888                                         888 Y8P          888                                                                                                   
         888                                         888              888                                                                                                   
     .d88888 888d888  8888b.  888  888  888      .d88888 888 .d8888b  888888  8888b.  88888b.   .d8888b  .d88b.  .d8888b                                                    
    d88" 888 888P"       "88b 888  888  888     d88" 888 888 88K      888        "88b 888 "88b d88P"    d8P  Y8b 88K                                                        
    888  888 888     .d888888 888  888  888     888  888 888 "Y8888b. 888    .d888888 888  888 888      88888888 "Y8888b.                                                   
    Y88b 888 888     888  888 Y88b 888 d88P     Y88b 888 888      X88 Y88b.  888  888 888  888 Y88b.    Y8b.          X88                                                   
     "Y88888 888     "Y888888  "Y8888888P"       "Y88888 888  88888P'  "Y888 "Y888888 888  888  "Y8888P  "Y8888   88888P'                                                   
    888               888                                                 d8b      888                                                                                      
    888               888                                                 Y8P      888                                                                                      
    888               888                                                          888                                                                                      
    88888b.   .d88b.  888888 888  888  888  .d88b.   .d88b.  88888b.      888  .d88888  .d88b.   8888b.  .d8888b                                                            
    888 "88b d8P  Y8b 888    888  888  888 d8P  Y8b d8P  Y8b 888 "88b     888 d88" 888 d8P  Y8b     "88b 88K                                                                
    888  888 88888888 888    888  888  888 88888888 88888888 888  888     888 888  888 88888888 .d888888 "Y8888b.                                                           
    888 d88P Y8b.     Y88b.  Y88b 888 d88P Y8b.     Y8b.     888  888     888 Y88b 888 Y8b.     888  888      X88                                                           
    88888P"   "Y8888   "Y888  "Y8888888P"   "Y8888   "Y8888  888  888     888  "Y88888  "Y8888  "Y888888  88888P'                                                           
     .d8888b.                                   888 d8b 888                          888                                                                                    
    d88P  "88b                                  888 Y8P 888                          888                                                                                    
    Y88b. d88P                                  888     888                          888                                                                                    
     "Y8888P"         888d888  .d88b.   8888b.  888 888 888888 888  888      .d8888b 888  .d88b.  .d8888b   .d88b.  888d888                                                 
    .d88P88K.d88P     888P"   d8P  Y8b     "88b 888 888 888    888  888     d88P"    888 d88""88b 88K      d8P  Y8b 888P"                                                   
    888"  Y888P"      888     88888888 .d888888 888 888 888    888  888     888      888 888  888 "Y8888b. 88888888 888                                                     
    Y88b .d8888b      888     Y8b.     888  888 888 888 Y88b.  Y88b 888     Y88b.    888 Y88..88P      X88 Y8b.     888                                                     
     "Y8888P" Y88b    888      "Y8888  "Y888888 888 888  "Y888  "Y88888      "Y8888P 888  "Y88P"   88888P'  "Y8888  888                                                     
                               888               888                888                                                                                                     
                               888               888           Y8b d88P                                                                                                     
                               888               888            "Y88P"                                                                                                      
     .d88b.   8888b.   .d8888b 88888b.       .d88888  8888b.  888  888                                                                                                      
    d8P  Y8b     "88b d88P"    888 "88b     d88" 888     "88b 888  888                                                                                                      
    88888888 .d888888 888      888  888     888  888 .d888888 888  888                                                                                                      
    Y8b.     888  888 Y88b.    888  888     Y88b 888 888  888 Y88b 888                                                                                                      
     "Y8888  "Y888888  "Y8888P 888  888      "Y88888 "Y888888  "Y88888                                                                                                      
                                                                   888                                                                                                      
                                                              Y8b d88P                                                                                                      
                                                               "Y88P"                                                                                                       `);
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-font-family": '"Nerd Semi", cursive',
          }}
        >
          <ModalContext.Provider
            value={{
              timeline,
              setTimeline,
              fullScreenVideo,
              setFullScreenVideo,
              setImageViewer,
              imageViewer,
              heartColor,
              rewind,
              bookMessage,
              setBookMessage,
              handleRewind,
              changeColor,
              screen,
              setScreen,
              lensClient,
            }}
          >
            <div
              className={`flex relative w-full h-full ${
                color ? `theme-${color}` : "theme-cream"
              }`}
            >
              {children}
            </div>
          </ModalContext.Provider>
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
