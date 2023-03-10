import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, useEffect, useRef, useState } from "react";
import Footer from "../components/layout/Footer";
import { useMediaQuery } from "@material-ui/core";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import Header from "../components/layout/Header";

const { chains, provider } = configureChains(
  [chain.mainnet],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "DIGITALAX",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const GlobalProfileContextDefault = {
  expressInterest: "",
  setExpressInterest: (expressInterest: string) => {},
};

export const GlobalContext = createContext(GlobalProfileContextDefault);
const colors = [
  "cream",
  "dark",
  "blue",
  "green",
  "purple",
  "heart",
  "plum",
  "lime",
  "sea",
  "hot",
];
const heartColors = [
  "#131313",
  "#FAF4E8",
  "#FAF4E8",
  "#131313",
  "#4b0082",
  "#2f25a7",
  "#3cfdf6",
  "#090d12",
  "#c3e0c3",
  "#ce02cb",
];
// const { setItem, value } = useStickyState();
function MyApp({ Component, pageProps }: AppProps) {
  let queryWindowSize2XL: boolean = useMediaQuery("(max-width:1600px)");
  const [color, setColor] = useState<string>(colors[0]);
  const [heartColor, setHeartColor] = useState<string>(colors[0]);
  const changeColor = () => {
    if (colors.indexOf(color) < 9) {
      setColor(colors[colors.indexOf(color) + 1]);
      setHeartColor(heartColors[colors.indexOf(color) + 1]);
      localStorage.setItem("theme-color", color);
    } else {
      setColor(colors[0]);
      setHeartColor(heartColors[0]);
      localStorage.setItem("theme-color", color);
    }
  };
  const [expressInterest, setExpressInterest] = useState(
    GlobalProfileContextDefault.expressInterest
  );
  useEffect(() => {
    if (window) {
      const storageColor = localStorage.getItem("theme-color");
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
  const shop = useRef<null | HTMLDivElement>(null);
  const handleShop = (): void => {
    if (shop.current) {
      shop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <GlobalContext.Provider value={{ expressInterest, setExpressInterest }}>
          <div
            className={[
              "min-h-full h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS bg-mainBg overflow-x-hidden",
              color ? `theme-${color}` : "theme-cream",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <Header
              rewind={rewind}
              changeColor={changeColor}
              heartColor={heartColor}
              handleShop={handleShop}
            />
            <Component
              {...pageProps}
              heartColor={heartColor}
              queryWindowSize2XL={queryWindowSize2XL}
              shop={shop}
            />
            <Footer handleRewind={handleRewind} />
          </div>
        </GlobalContext.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
