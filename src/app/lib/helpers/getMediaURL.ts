import { INFURA_GATEWAY, IPFS_REGEX } from "../constants";

const getMediaUrl = (audio: string, video: string, type: string) => {
  let url = "";
  if (type === "audio" && audio) {
    url =
      audio.includes("ipfs://") && IPFS_REGEX.test(audio?.split("ipfs://")?.[1])
        ? `${INFURA_GATEWAY}/ipfs/${audio.split("ipfs://")[1]}`
        : audio.includes("ar://")
        ? `https://arweave.net/${audio
            ?.split("ar://")?.[1]
            ?.replace(/"/g, "")
            ?.trim()}`
        : audio;
  } else if (type === "video" && video) {
    url =
      video.includes("ipfs://") && IPFS_REGEX.test(video?.split("ipfs://")?.[1])
        ? `${INFURA_GATEWAY}/ipfs/${video.split("ipfs://")[1]}`
        : video.includes("ar://")
        ? `https://arweave.net/${video
            ?.split("ar://")?.[1]
            ?.replace(/"/g, "")
            ?.trim()}`
        : video;
  }
  return url;
};

export default getMediaUrl;
