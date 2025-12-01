"use client";

import { INFURA_GATEWAY } from "@/app/lib/constants";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function TokensEntry({ dict }: { dict: any }) {
  const handleTreasuryClick = async () => {
    const treasuryAddress = "0x10C0B0DA2A682C12bD36516A95CB8474C02d83De";
    try {
      await navigator.clipboard.writeText(treasuryAddress);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="relative w-full bg-black flex min-h-screen items-center flex-col px-3 gap-20 py-10">
      <div className="relative w-fit font-star text-white text-center items-center justify-center h-fit flex flex-col gap-3 text-sm">
        <div className="relative w-fit h-fit flex text-4xl">
          {dict.tokens.awake}
        </div>
        <div className="elative w-fit h-fit flex">{dict.tokens.chat}</div>
        <div
          className="relative w-fit h-fit gap-2 flex items-center justify-center flex-row cursor-sewingHS hover:opacity-80"
          onClick={() => window.open("https://digitalax.xyz/llms.txt")}
        >
          <div className="relative w-fit h-fit flex">{dict.tokens.llms}</div>
          <MdOutlineArrowOutward
            className="relative w-fit h-fit flex"
            color="white"
          />
        </div>
      </div>

      <div className="relative w-full max-w-xl font-chill text-white text-center items-center justify-center h-fit flex flex-col gap-4 text-sm">
        <div className="relative w-fit h-fit flex">
          {dict.tokens.description}
        </div>
        <div className="relative w-fit font-neco text-white text-center items-center justify-center h-fit flex flex-row flex-wrap justify-between gap-7 text-sm">
          <div className="relative w-fit h-fit flex flex-col gap-2">
            <video
              autoPlay
              muted
              loop
              className="object-cover w-60 cypher h-80 flex"
              draggable={false}
              poster={`${INFURA_GATEWAY}/ipfs/QmRbrWWpD6E77KvYj9thKwmWMesxxieqLmNE5Va2nZ9Qe2`}
            >
              <source
                src={`${INFURA_GATEWAY}/ipfs/QmaR4Aw5L6mH5TKK4ghhc5TxHkU7Ydo8LpFDfzoXt3Y1Yc`}
              />
            </video>
            <div className="relative w-fit h-fit flex">OT-P53</div>
          </div>
          <div className="relative w-fit h-fit flex flex-col gap-2">
            <video
              autoPlay
              muted
              loop
              className="object-cover w-60 cypher h-80 flex"
              draggable={false}
              poster={`${INFURA_GATEWAY}/ipfs/QmNxoYwkyMQBzJnjd2xASstM1bYGWYgmnkdd23bKL1T75A`}
            >
              <source
                src={`${INFURA_GATEWAY}/ipfs/Qmb2YwKFLPucXoKJVDBtM55qmQKzQ6PZvJ6Wbme6gqBtwL`}
              />
            </video>
            <div className="relative w-fit h-fit flex">VNO-7L4</div>
          </div>
          <div className="relative w-fit h-fit flex flex-col gap-2">
            <video
              autoPlay
              muted
              loop
              className="object-cover w-60 cypher h-80 flex"
              draggable={false}
              poster={`${INFURA_GATEWAY}/ipfs/QmX79fkoiXBsRZysBkYhNhetzv6HT58baSbZ4wp86xTHbn`}
            >
              <source
                src={`${INFURA_GATEWAY}/ipfs/QmcaH88ccwLPVQ91ZDNjJMrq3QN7JkyxmBZwTq59bKHm8s`}
              />
            </video>
            <div className="relative w-fit h-fit flex">ENI-GX19</div>
          </div>
          <div className="relative w-fit h-fit flex flex-col gap-2">
            <video
              autoPlay
              muted
              loop
              className="object-cover w-60 cypher h-80 flex"
              draggable={false}
              poster={`${INFURA_GATEWAY}/ipfs/QmSKgwMv3YehejfQzi1jBChZu8znJmrKVPE1w2ZpgozTi7`}
            >
              <source
                src={`${INFURA_GATEWAY}/ipfs/QmbYp2y6NcCthYsotFJZMqw5G19fJy1gzqcCKAgigX3zFz`}
              />
            </video>
            <div className="relative w-fit h-fit flex">CRY-M0D7</div>
          </div>
          <div className="relative w-fit h-fit flex flex-col gap-2">
            <video
              autoPlay
              muted
              loop
              className="object-cover w-60 cypher h-80 flex"
              draggable={false}
              poster={`${INFURA_GATEWAY}/ipfs/QmRXf8a7HGrjArjRrpVfqLw5kq2xPCGuUy53c7vg4QgDzd`}
            >
              <source
                src={`${INFURA_GATEWAY}/ipfs/QmYo9ZgbAWMTPA99dSDLcf4LZcQQXDv63pPcK1ddDssXtZ`}
              />
            </video>
            <div className="relative w-fit h-fit flex">SIG-A2C</div>
          </div>
        </div>
      </div>
      <div className="relative w-full h-fit flex flex-col gap-4 justify-start items-start text-white max-w-3xl">
        <div className="max-w-3xl border border-dashed border-white h-1 w-full flex"></div>
        <div className="relative w-full h-fit flex flex-col gap-2">
          <div
            onClick={handleTreasuryClick}
            className="relative w-fit h-fit flex font-neco text-3xl cursor-sewingHS hover:underline"
          >
            {dict.tokens.treasury}
          </div>
          <div className="relative w-fit h-fit flex font-star text-xs">
            {dict.tokens.treasuryText}
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col gap-2">
          <div className="relative w-fit h-fit flex font-neco text-3xl">
            {dict.tokens.grants}
          </div>
          <div className="relative w-fit h-fit flex font-star text-xs whitespace-pre-line">
            {dict.tokens.grantsText}
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col gap-2">
          <div className="relative w-fit h-fit flex font-neco text-3xl">
            {dict.tokens.tokensTitle}
          </div>
          <div className="relative w-fit h-fit flex font-star text-xs whitespace-pre-line">
            {dict.tokens.tokensText}
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col gap-2 pb-3">
          <div className="relative w-fit h-fit flex font-neco text-3xl">
            {dict.tokens.privacy}
          </div>
          <div className="relative w-fit h-fit flex font-star text-xs">
            {dict.tokens.privacyText}
          </div>
          <video
            draggable={false}
            className="relative object-cover border border-white pt-4 w-72 h-40 flex"
            poster="https://chromadin.xyz/api/infura/QmenggnmziozxNAazvbPH7Dafh2MxT87DqXiYiykRgDJm2"
            controls={true}
          >
            <source src="https://gw.ipfs-lens.dev/ipfs/bafybeibfjkzskjddb2qfvzsmiohoc2mk7ti6ti5g7dtfmxj4jlmtwwkdbm" />
          </video>
        </div>
        <div className="relative w-full h-fit flex flex-col gap-2">
          <div className="relative w-fit h-fit flex font-neco text-3xl">
            {dict.tokens.social}
          </div>
          <div className="relative w-fit h-fit flex font-star text-xs">
            {dict.tokens.socialText}
          </div>
        </div>
        <div className="relative w-full h-fit flex flex-col gap-2">
          <div className="relative w-fit h-fit flex font-neco text-3xl">
            {dict.tokens.build}
          </div>
          <div className="relative w-fit h-fit flex font-star text-xs whitespace-pre-line">
            {dict.tokens.buildText}
          </div>
        </div>
      </div>
    </div>
  );
}
