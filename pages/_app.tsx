import "../styles/globals.css";
import "./../i18n";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { useEffect, useRef, useState } from "react";
import Footer from "../components/Layout/modules/Footer";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "@rainbow-me/rainbowkit/styles.css";
import { XMTPProvider } from "@xmtp/react-sdk";
import { useRouter } from "next/router";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import Modals from "../components/Modals/components/Modals";
import { polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { HEART_COLORS, THEME_COLORS } from "@/lib/constants";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  Theme,
} from "@rainbow-me/rainbowkit";
import { merge } from "lodash";
import RouterChange from "@/components/Layout/modules/RouterChange";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";


const walletTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#111313",
  },
} as Theme);

const { chains, publicClient } = configureChains(
  [polygon],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! })]
);

const { connectors } = getDefaultWallets({
  appName: "DIGITALAX",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
    if (window) {
      const storageColor = localStorage.getItem("digi-theme-color");
      if (storageColor) {
        setColor(storageColor);
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
  const rewind = useRef<null | HTMLDivElement>(null);
  const handleRewind = (): void => {
    rewind.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [routerChangeLoading, setRouterChangeLoading] =
    useState<boolean>(false);
  useEffect(() => {
    const handleStart = () => {
      setRouterChangeLoading(true);
    };

    const handleStop = () => {
      setRouterChangeLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  if (routerChangeLoading) {
    return <RouterChange />;
  }

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={walletTheme}>
        <XMTPProvider dbVersion={2}>
          <Provider store={store}>
            <div
              className={[
                "min-h-full h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS bg-mainBg overflow-x-hidden",
                color ? `theme-${color}` : "theme-cream",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <Component
                {...pageProps}
                heartColor={heartColor}
                router={router}
                rewind={rewind}
                changeColor={changeColor}
              />
              <Footer handleRewind={handleRewind} />
              <Modals />
            </div>
          </Provider>
        </XMTPProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default appWithTranslation(MyApp);
