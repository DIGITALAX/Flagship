import Heart from "@/components/Layout/modules/Heart";
import useLog from "@/components/Log/hooks/useLog";
import { LogProps } from "@/components/Log/types/log.types";
import { IMAGE_LOGS, INFURA_GATEWAY } from "@/lib/constants";
import descriptionRegex from "@/lib/lens/helpers/descriptionRegex";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/legacy/image";

const BuildLog: NextPage<LogProps> = ({ rewind, router }): JSX.Element => {
  const { currentImage, setCurrentImage } = useLog();
  return (
    <div className="min-w-screen min-h-screen h-full flex flex-col bg-gradient-to-b from-windows to-black justify-start items-center pb-28 gap-32 px-2 sm:px-6">
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-8">
        <div
          className="relative w-full h-fit flex flex-col sm:flex-row justify-between gap-10 sm:gap-4 pt-4 items-center"
          ref={rewind}
        >
          <div
            className="relative w-fit h-fit flex font-rain text-white text-4xl mr-0 items-center justify-center cursor-sewingHS"
            onClick={() => router.push("/")}
          >
            DIGITALAX
          </div>
          <div className="relative w-fit h-fit flex ml-0 items-center justify-center flex-col sm:flex-row gap-3">
            <div className="relative w-fit h-fit flex font-bit text-white text-2xl sm:text-4xl mr-0 items-center justify-center top-1">
              DISTRO KIT
            </div>
            <Heart heartColor={"white"} />
          </div>
        </div>
        <div className="relative w-full h-[70rem] sm:h-[50rem] half:h-[40rem] flex items-center justify-between gap-8 flex-col half:flex-row">
          <div className="relative w-fit half:w-100 h-fit half:h-full flex half:flex-nowrap flex-wrap half:flex-col items-start font-bit text-white text-lg justify-start half:justify-between bg-gradient-to-b from-windows rounded-sm to-white/30 gap-4 p-3">
            {[
              "Start",
              "Cypher",
              "NPC Studio",
              "Coin Op",
              "The Manufactory",
              "$MONA",
              "Kinora",
              "Vision Quests",
              "Chromadin",
              "Lit Listener",
              "The Dial",
              "Legend",
            ].map((item: string, index: number) => {
              return (
                <div
                  className="relative w-fit h-fit flex items-center justify-between flex-row gap-4 cursor-sewingHS"
                  key={index}
                  onClick={() => setCurrentImage(index)}
                >
                  <div className="relative w-fit h-fit flex items-center justify-center">{`${index}.`}</div>
                  <div
                    className={`relative w-fit h-fit flex items-center justify-center ${
                      index == currentImage && "text-black"
                    }`}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative w-full h-full rounded-sm bg-black flex">
            <Image
              key={currentImage}
              draggable={false}
              className="rounded-sm"
              layout="fill"
              objectFit={currentImage > 1 ? "cover" : "contain"}
              src={`${INFURA_GATEWAY}/ipfs/${IMAGE_LOGS[currentImage].image}`}
            />
            {currentImage > 1 && (
              <div className="absolute bottom-3 right-3 w-48 h-fit border border-white rounded-md bg-black/70 px-2 py-3 flex flex-col items-center gap-5 justify-center text-white font-mana text-center">
                <div className="relative w-fit h-fit flex items-center jutify-center text-lg break-words">
                  {IMAGE_LOGS[currentImage].title}
                </div>
                <div className="relative w-fit h-fit flex items-center jutify-center break-words text-sm">
                  {IMAGE_LOGS[currentImage].description}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Head>
        <title>Build Log</title>
        <meta
          name="description"
          content="We write prompts, design styles & build code for protocol-ecosystems where web3 fashion & latent machines draw distances between ideas & reality closer each day."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="DIGITALAX" />
        <meta
          property="og:image"
          content="https://www.digitalax.xyz/card.png/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <div className="relative w-full h-fit flex flex-col items-center justify-start gap-14 text-white font-bit">
        <div className="relative w-fit h-fit flex items-center justify-center gap-1 text-sm preG:text-2xl flex-col">
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ A visual record of ++
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ what's been built & ++
          </div>
          <div className="relative w-fit h-fit flex items-center justify-center break-words">
            ++ what's in development ++
          </div>
        </div>
        <div className="relative w-full h-fit flex items-start justify-center gap-10 text-left flex-col">
          {[
            {
              title: "But first, what's the point?",
              description: `We know why you're here. 

              It's hard to figure out what to make of so much information, and all the claims of revolutionary advances in tech, filling our feeds all over the internet. Generative AI and Web3, more than anything else, promise a sudden radical shift in lifestyles and society. They are confusing at best unless you somehow keep up with the latest hyper-technical developments. It feels like there's a new can't miss update every few minutes.   
              
              What you're really asking is a lot simpler: 
              
              Is AI going to replace me? And, if not, how do I get noticed or earn anything from what I create?`,
            },
            {
              title: "Why Start With Web3Fashion?",
              description: `It's a fundamental shift to advancing autonomy at the most basic levels of creation, production, distribution, and trade. Web3 changes how you get agency and openings to connect products with markets and community growth. 
              
              You can make what you want to wear, and express yourself in any style. It's always been what drives technology forward the most. The computer you're using now, whether a giant LLM workstation, blazing fast gaming desktop, or pocket piece of glass, metal, and plastic, it got its start in counting and automating threads into fashion.  `,
            },
            {
              title: "How do you break through barriers in creative markets?",
              description: `The early net was wild, a place where code wasn't quite law, but might be someday, and the only limit was your 14.4k modem screaming into the void. But as screens got wider, so did the barriers. Big platforms came stomping in, claiming the wilds for themselves, leaving us with cookie-cutter profiles and the echo of 'user engagement'.
              
              Now, we take it back. 
              
              You break through by earning agency. With each effort, each message, each trade, decentralized records of account and exchange are more than pretty pictures (although usually,they're that too). They point to, activate, and help operate conditional logic in machines that build your power to reach people through universal storefronts, user-level encryption, and NPC teams you can train and learn from to compete head to head with the biggest players in any market.`,
            },
          ].map(
            (
              item: {
                title: string;
                description: string;
              },
              index: number
            ) => {
              return (
                <div
                  className="relative w-fit h-fit flex items-start justify-center flex-col gap-2"
                  key={index}
                >
                  <div className="relative w-fit h-fit flex items-center justify-start text-xl">
                    {item.title}
                  </div>
                  <div
                    className="relative w-fit h-fit flex items-center  break-words whitespace-pre-line justify-start text-xs text-solapa font-mana"
                    dangerouslySetInnerHTML={{
                      __html: descriptionRegex(item.description, false),
                    }}
                  ></div>
                </div>
              );
            }
          )}
        </div>
        <div className="relative w-fit h-fit flex items-center justify-center gap-1 text-4xl flex-col pt-10">
          ++ Ecosystem Overview ++
        </div>
        <div className="relative w-full h-fit flex items-start justify-center gap-10 text-left flex-col">
          {[
            {
              title: "1. Cypher",
              description: `Spare your attention for rare creations that call you to make more. It's kind of obvious, that you can search the entire ecosystem from one quick and streamlined place. Ideas from trending hashes? We've got that. All catalogs and publications from the ecosystem instantly in front of you, too. You can collect new creators, new music, something new to watch, wear, or display proudly on walls -- virtually, at home, in the streets, we won't judge. Favorite part? Replace doomscrolling with a throwback, text-adventure style. Token gated gameplay evolves user-level encryption into every social feed.
              
              Cypher resonates with your distinct voice and cultural wavelength. It's where you find your way. A gateway to everything the ecosystem has to offer. `,
            },
            {
              title: "2. NPC Studio",
              description: `Insert $MONA to assemble, lead, and train an AI agent workforce unbundling the new earned agency economy. 

              Players must efficiently manage team members, materials, equipment, tokens, tradeable goods, storefront success metrics, computational performance, and energy demands. Use your $MONA to keep your systems running, with effective load balancing and NPC rewards for great performance. Chat with your team in a simulated resource game interface with open source middleware. Your survival depends on your NPC teams' ability to reduce idle time of large language model workstations, generate rare creations that are market ready, and earn agency with each milestone proudly accomplished.
              
              Resource simulation games are a genre that use strategic management of teams, goods, and trade to level up your skills and capacity for success. These games focus on gathering, managing, and deploying resources like raw materials, currencies, and characters, playable or NPC, in scarce and competitive conditions. They blend strategic planning, tactical decision-making, logistics and supply chain management, the crafting of new parts, and working hard within NPC Studio to get the best performance possible from the otherwise hyper-technical (and out of reach for the GPU+VRAM poor masses) process of making LLM inference, generation, teamware, and hardware reqs make sense.
              
              Here you simulate the fashion design studio creative process, fabrication of textiles into streetwear and raw material supply chains into chip fabs (when you level up enough to unlock it like Sama), storefronts for creative commerce, and the trading strategies of your resource acquisition and growth team. For added realism, visit in game versions of industry water cooler Reddit subs and Discord servers with your teams to learn just like the rest of us about the latest in local open source LLM operation and development, nimbly navigating yaround shitposts with main character energy in the process.
              `,
            },
            {
              title: "3. Coin Op",
              description: `Your coin operated generative automat with an eclectic array of streetwear, prints, and virtual goods each linked to a distinct part of the web3 ecosystem.
              
              Collect with card or your choice of $MONA, $MATIC, $WETH, and $USDT. All personal fulfillment and transactional data remains encrypted at the user-level ensuring maximum decentralized network autonomy for increased peace of mind and extra cypherpunk cred. Integrates seamlessly with The Manufactory for decentralized web3fashion and generative art production and fulfillment. 
              
              Each purchase reinforces the network of creators, innovators, and builders that shape independent channels for wearable, display worthy communication in style.`,
            },
            {
              title: "4. The Manufactory",
              description: `Mint, ink, print, and ship your web3fashion or generative art collections into IRL wardrobes and walls. The Manufactory, is a decentralized creators studio co-op, where rare, statement making works are woven into reality. 
              
              Start by selecting what you want to produce. You can find them through Cypher, on Coin Op, and throughout the ecosystem. Your choices are then crafted by a decentralized network of creators, ready for both post-digital display and physical distribution. Throughout, your transactional and operational data is encrypted, safeguarding your creative process from the ad hungry prying eyes of archaic social networks. 
              
              More than a production line, The Manufactory is a blueprint for autonomy in creation. `,
            },
            {
              title: "5. $MONA",
              description: `Hold, trade, and insert $MONA throughout the ecosystem to channel the currents of creativity and commerce in the generative NPC era. This ERC-20 token, combined with an extensive and growing library of contracts, responds to event triggers and conditional logic to seamlessly assist your pursuit of a better timeline that respects human autonomy. As much as it is a unit of record, account, and exchange, it is a unit of agency and access. Your interactions with The Manufactory, NPC Studio, CoinOp, Chromadin, and all components of the extended ecosystem have use beyond ordinary collectibles and transactions. They serve as messages between nodes and to the world saying we will build our own future free from arbitrarily centralized control (thank you very much).
              
              In NPC Studio, it activates AI agents and the specific equipment you can run to create with them, rewarding innovation and reducing the idle time of creative processes. Within CoinOp, $MONA becomes an agent of commerce, allowing instant creation and acquisition of streetwear with real-world integration. It's the silent enforcer of The Manufactory's operations, executing design and fulfillment tasks with a precision that only a dedicated system token can provide.`,
            },
            {
              title: "6. Kinora",
              description: `This open-source video player and SDK, extending the already potent functionality of Livepeer for decentralized video encoding, decoding, and distro, is your toolkit for crafting privacy-respecting, engaging video content. It's seamlessly integrated with web3 quests in the DIGITALAX ecosystem.
              
              Git clone its library to create entire platforms for video distro that speak to the web3 era. 
              
              Whether watching the latest web3fashion show or streaming generative art instructionals, each video is an entry point into deeper ecosystem reach and engagement. Use the Kinora SDK to integrate these experiences into your decentralized projects as a replacement for centralized platforms, all while maintaining user-level encryption for every viewer's data.
              
              Kinora isn't just for creators and viewers; it's about a cultural shift to decentralized media in all its forms. With the power of Livepeer, integration of Vision Quests, and Lens Protocol, Kinora gives everyone a path to video distro that isn't just entertaining or distracting—it's an interactive journey with measurable metrics tailored to why you watch and create.`,
            },
            {
              title: "7. Vision Quests",
              description: `When a user initiates a Vision Quest, they perform specific on-chain and off-chain tasks, each verified and logged within the DIGITALAX ecosystem. On completion, rewards are automatically distributed, with NFTs, tokens, and experience points reflecting their achievements and contributions.
              
              Embark on Vision Quests to unlock the narrative potential of the DIGITALAX ecosystem. Engage in quests that challenge your creativity, wit, and collaborative spirit. Earn exclusive rewards, forge community ties, and experience the thrill of discovery and achievement, all gated by the tokens you hold, enhancing the value of your journey.
              
              Vision Quests are the key gameplay mechanism of the ecosystem's interactive layer, offering experiences that are as diverse as the communities we choose to align with. These quests aren't just for roleplaying games; they're micro-adventures that weave together the many threads of DIGITALAX, from the lore encoded in NFTs to the decentralized marketplace and storefront activity. They're an invitation to explore, contribute, and grow within a vibrant web3 Maslovian skilltree, to take part in stories that evolve with each participant's actions, and to leave an indelible mark on the post-digital realms. Vision Quests are gears of engagement, rewarding the curious and the brave with treasures that go beyond the meme—into the worlds were tangible goods meet the transformative power of earned agency. `,
            },
            {
              title: "8. Chromadin",
              description: `An always-on, dynamic content feed, where you can actively participate by posting, liking, mirroring, starting lengthy and erudite comment threads about, and sharing web3-native social media content.
              
              Interact with distinct features from web3 music streams, a portable video player, and token-gated access to curate a personalized media experience. CoinOp integration gives you a seamless way to add prints and apparel to your collection. The Kinora SDK delivers the goods for snappy video delivery and playback. `,
            },
            {
              title: "9. Lit Listener",
              description: `If you sit back for a moment to think about it, the key to Web3 is user-level encryption in networks, money, and culture. It's more than just privacy, security, and record keeping. It's essential for conditional logic in real world environments.
              
              When a user sets up a circuit with the LitListenerSDK, they define a series of conditional, often on-chain, encrypted actions. The SDK listens for specific events, like contract execution or an oracle update, and once the predefined conditions are met, it triggers the next action in the sequence—whether it's releasing funds, minting an NFT, or updating a leaderboard.
              
              Lit Listener is the backbone of user-level encryption in the DIGITALAX ecosystem, essential for activating the complex web of conditional logic that underpins real-world environments. It's not exclusively about privacy, security, and record-keeping; it's crafting a responsive, autonomous world where each user's actions are encrypted and executed based on pre-approved conditions. This SDK gives users the kind of agency only possible when you can create conditional encryption circuits in decentralized code—-- tailored sequences of actions that respond to the dynamics of web3 mechanisms and social trends. Each interaction is a step toward a more seamlessly integrated and agentic post-digital existence. `,
            },
            {
              title: "10. The Dial",
              description: `Tune into The Dial, your decentralized dashboard, infusing agency into your generative social media experience. 
              
              Use the integrated generative AI engine to craft distinctive content that stands out. Connect via Lens, chat, and collect with an ever increasing array of creative users making rare post-digital and capacitive goods, from unique NFTs to bespoke apparel. Each interaction enhances your status and reach within web3, and through it, all layers in the generative NPC economy accelerating ahead. `,
            },
            {
              title: "11. Legend",
              description: `When using Legend, users discover grants and proposals for web3 public goods infrastructure. You help make these needed upgrades happen faster with more reliable support for indie dev teams, but not just through the usual direct contributions. Each purchase you make of related NFTs, streetwear, art prints, NPC equipment, and virtual goods doesn't just keep devs fueled in ramen and energy drinks. It decentralizes the process of selecting and making the missing open source infrastructure we all rely on.
              
              Legend creates a more reliable connection between devs, creators, and every user. It enriches the ecosystem's distributed resilience and safeguards it against subtle forms of market power centralization. This model is an enhancement to freely coordinated agency, peer to peer. A reinforcement of web3's key principles of decentralization, defense, deterrence, and community-driven participation in depth.
              
              Commerce based funding of web3 public goods? Yeah, it's novel. But the real legend here is you, for accelerating the build of this ecosystem. 
              
              Stay tuned as our story continues.`,
            },
          ].map(
            (
              item: {
                title: string;
                description: string;
              },
              index: number
            ) => {
              return (
                <div
                  className="relative w-fit h-fit flex items-start justify-center flex-col gap-2"
                  key={index}
                >
                  <div className="relative w-fit h-fit flex items-center justify-start text-xl">
                    {item.title}
                  </div>
                  <div
                    className="relative w-fit h-fit flex items-center whitespace-nowrap break-words whitespace-pre-line	justify-start text-xs text-solapa font-mana"
                    dangerouslySetInnerHTML={{
                      __html: descriptionRegex(item.description, false),
                    }}
                  ></div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default BuildLog;
