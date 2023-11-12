import { FunctionComponent, useState } from "react";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";

const Slider: FunctionComponent = (): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(true);
  const images: string[] = [
    "QmYWZr4WHHYoAAUMcRTSEqPQgKnarDegjF4oY2ygFTes38",
    "QmPXNEGoUH57EombDdHi35nH72jDVLqTyrGxJwHYTPztN6",
    "QmRg2ZvbtgyeQwjg2A9nj2h9ZQfnP5q5LPafmTAcovXvWb",
    "Qmcyi8dEDWaL5Cd8ReE4RJVMQ36cg5u5g4WyPWTPHG82qL",
    "QmUzfxTVywU9NuqgKqzwFyWvR8ufwLCTwRxchKUCbQVPre",
    "QmVtkoi96myxPq3PLJ4bQYYMp8i1WVb9RrXGW15VNLu83x",
    "QmU7GdPSEzfqEanSGq33CF83yVEXgPEnkwt8JcYXKNniKa",
    "QmUKiQk8qxtuDUuVzXHUDQgjmuEcrx3xcxYmeveFwnN3s7",
    "QmbnhjHGNXXs8Tm8J6rxPDdviDm3D7hzbR1pQ984SJrLjQ",
    "QmZLrLoiWgSQx4Y4p5womz6RfSCMeXPNLyoWd8wrQsVcew",
    "QmRnmbEXXEjy6nE15hoUEjqvLZBCxfjJUJPtRx1bttz7PE",
    "QmYSeV68SSimXhP3dPbT3eCs4kbfmtUbcuv1zdaz4znVby",
    "QmQu5JbudUocf1AUx6eVqedR78t4pxvUaKci9qveTUbo72",
    "QmSj25aZL7VChXMpdhuH4srBnaRs9X2LZiBg2zj4daD18r",
    "QmUY7zhydGZbud3XLkmY7ATFt1s45HTgTWGP5jACFFT7mT",
    "QmSi2mrHFzhoMwe8KRBQRq3kLNNwtyHYFajqu2wRPSPTn5",
    "QmTRNcDzGAesMVmYisXGJqzeWsPR3kKtCSRMWygPjPDToc",
    "QmVVRYHywoyeJBELXxMtcwA65ZYHFWTM2BaMac2pJMZuFV",
    "QmWHA1icgnPf4LRGUbgVkTytjnfAgAt6JRn3sh2xSiyRux",
    "QmUMoEnpuNm5qGEzoihFSJbJm51CuquYA5AjQMCxtV3uDP",
    "QmdhewgJ5vdD5SxZnCEx66w3NgMiuq1B23pBsSo8gCT3x5",
    "QmS53zQQ5bdv2Bt17d4zBCF9WH7tDvGfmt99k8n9f4arfQ",
    "QmPTt9tmgT2V9owEXWQ9LeoFf1LzM1pX4ZH2D2P9Swr3Rw",
    "QmSHRBLYQmqyg1MtmDnjXh6m7wfuk2KfDXWxFKoUhS3Edi",
    "QmbbnAbiN8oYrRcCyjkciTaCLQv55f6Zxasee1AaH5z4r8",
    "QmStuz3QzMLsXar2otn5QE7cL6M74nhqp9W5pdKGEHc1j3",
    "Qmf1rdfGzZQBepJGstC2ZFJg6aRyYSk86aih8k1ohLEfGa",
    "QmcnkKLbxDhLQGGNFHETqCvecx7qH44gKwqATYzqFFXP41",
    "QmR5itqF9ww2NAW7UU9eVoHVK9TdkeZ4K7XR1VWPw4PkkD",
    "QmT4NzEaevPNsggTocJ8GbkyNdACr6AUT9xSWX2d4jAqQZ",
    "QmVY6iyvx6vjHAJA6pAFBhFZ1KZKuQPQ2ypQAf1PnxKbXW",
    "QmaFAoj7nfjifrrof2oSY6DmzLBCvoXSvKcqUnz8qU6Mxh",
    "QmRoR1gaRsE8dwqeJu8DymYPPTsCu42fVNTEXFaTt31Rcp",
    "QmXEEMpMyyioS89B7Csh9zSHFZaMQ2k2MhNqGZQM87U426",
    "QmciENzaZbC8sxKqkLinwTNPgMiaYSavtQjU2hP8cPjuVn",
    "QmZqU8rxMaDMgV3httd9Dt4SmWQhvFsEfUwKRiQxAntrFg",
    "Qmc9shZTJ9NhC41SUtJPRZXb1CJY5epGNLTKMNMEbLH24o",
    "QmRZAsWGsF6E6v3yJPCeWYoiYTE33iogQVp7stR17YmMWU",
    "QmXxh3L7P5PWYzNEYhmnvrBhpRvACMWkzbt8zp6oMdHYF4",
    "QmZkHtabU2NAJk8NZEDDLGUVGWZfs2SRf9sKsr6Lr1ZH15",
    "QmVhU4ujY9VVvycNSYwTC2bD1QWo44aarZ3y5q4pryD1js",
    "QmVVRYHywoyeJBELXxMtcwA65ZYHFWTM2BaMac2pJMZuFV",
    "QmXuiinjKCBznDirgKJqScJxiuBB5PZjvjFMbNW1SfftWx",
    "QmSawPR495Nz4FkzDtEdMGqseajJVgaRdkzjjYo323oQoa",
    "QmczCJ447jBVKzJx5Hzpw3kKbyiZ7L4txLCzfF2jyvSyDf",
    "Qma55LANSbUDxxpDyFNXqLgd1NbBP9ZgZKxhnyU94AJAT3",
    "QmWHEWR3b7TxxC958bXFHsK9Y6xMaHExjyHdC8EPyWbLTB",
    "QmaosdFhBFCfrbsLofVy4gapoE8chuyo3D56SKDsbxA23S",
    "QmPT52h6Frw85WUnzUUnsZHyEu1grfbQ4mx8eDpKffoqya",
    "QmdLBsKJy3QxAgwNvTyHMt7KwxGgSXJjamxc2XPdMmrbVF",
    "Qmaamv9FVvuHp97L6xZYacHLaysqR69G3ujN1bRgSzCFJf",
    "QmVSdCFv7pYy8g2us1GNqBrCQGgAva4BGD1tHxDHxsgDA8",
    "QmW6DMDkj47xiTD9zAdpNixDePMBxvsejijsv6HEhtg1rH",
    "QmdXabFtBajWEwrsmdYSdpBqVJ7a3RRZEhDWFwF3bgCWxM",
    "QmNo2STKijpdNuzmXqWtgAowej4q9CyzMawjeDjCzihLSC",
    "QmYsNEoSRsH8e7BZQNK3CWzxSXnDLGCYE7G4zJ1Fgf7T6V",
    "QmcdCAFND7wsUwSbNTfVzEgWojqLNrCEJJ6Kju9N5ETUEN",
    "QmVFbVapeMBqrBR3ZmR9TkN1pfJBuD89HhMnDv7bc8YKVC",
    "QmNPLvtqUM2gfyvGmvPtbBbW3RGyCYCz7EqaYTcFALA6n9",
    "QmQ6ZGy4j4NRp9fwLnU2juPXtnaX5Uv4XCDGPTwUsUhtcw",
    "QmTt5vN9y9ycz77jHVNJguTP4bzEAVfHrep2QqxSvAiKhX",
    "Qmc9VJkkwUdGkzmjHE8ucynzwkGKabwVRMvMv2pYharHjz",
    "QmWacwy98SvPX7ZtJRho3tZeHimFrK3xkQsWPjRNjgPu7y",
    "Qmdh9UV5UY68bRUBdhhWaqv1dhemYAEQ8r9jPezaYaLenT",
    "QmXpxDakNmSixpSbNr9TEfEMJ3bJtVv2EcKYQ4jVAD7C9C",
    "QmfW5DbyxTMaH8ZXe9pchKETWU2HpXGLwrBGd1iGBQpZbR",
    "QmPbjJn2ViDdaLfbihDyd5Abujs43q4d3M7FBKfAYe8rYG",
    "QmcnaDLD2iiGjbr6Vp4W6ViQFZft4A2NVp69P823b8h7Jo",
    "Qmd3Fk1NGpjRRZBu8VAVAMJVXWZKnhXRqem45U5N8JZQqs",
    "QmYCoRmNUc15f7ikQveqi1dWnjFh6ctxD4Uy33s3c1jWCU",
    "QmXrY5aX3venc1pP29pZjRxwB6wy5jfvx2hwhM5SK6KZvi",
    "QmRUiRyBk9fUwK3B22BbYbYD3exvj4fMfVxGwm2ioQwHya",
    "QmSArw1Fq61x2E6GesKPN8GDNkSKj23BLzJxjbjaoARgyB",
    "QmbZGXj4s5NVPakKsokc5uFTgg4vWMA6eDfkUEMExvSQRg",
  ];

  return (
    <div className="min-h-80 h-80 flex relative w-full bg-mainBg overflow-hidden pb-10 pt-10">
      <Marquee
        className="flex"
        pauseOnHover
        gradient={false}
        pauseOnClick
        direction="right"
      >
        {images.map((image, key) => {
          return (
            <div
              key={key}
              className={`min-h-60 min-w-60 h-60 w-60 relative mr-4 ${
                blur && "blur-sm animate-unblur"
              }`}
            >
              <Image
                src={`${INFURA_GATEWAY}/ipfs/${image}`}
                objectFit="cover"
                layout="fill"
                priority
                
                objectPosition={"top"}
                onLoadingComplete={() => setBlur(false)}
                draggable={false}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Slider;
