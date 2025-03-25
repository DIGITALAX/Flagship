import { INFURA_GATEWAY } from "../constants";

const fetchIPFSJSON = async (uri: string): Promise<any> => {
  let cleaned: string = uri;
  if (uri?.includes("ipfs://")) {
    cleaned = `${INFURA_GATEWAY}/ipfs/${cleaned
      ?.split("ipfs://")?.[1]
      ?.replace(/"/g, "")
      ?.trim()}`;
  } else if (uri?.includes("ar://")) {
    cleaned = `https://arweave.net/${cleaned
      ?.split("ar://")?.[1]
      ?.replace(/"/g, "")
      ?.trim()}`;
  } else {
    cleaned = `${INFURA_GATEWAY}/ipfs/${cleaned}`;
  }
  const response = await fetch(cleaned);
  const json = await response.json();
  return json;
};

export default fetchIPFSJSON;
