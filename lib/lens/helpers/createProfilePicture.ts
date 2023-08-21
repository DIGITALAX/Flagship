import { INFURA_GATEWAY } from "../constants";

const createProfilePicture = (publication: any, mirror?: boolean): string => {
  let profileImage: string;
  let formattedPrefix: any;
  if (!mirror) {
    formattedPrefix = publication?.picture;
  } else {
    if (publication?.__typename === "Mirror") {
      formattedPrefix = publication?.mirrorOf?.profile?.picture;
    } else if (
      publication?.__typename === "Post" ||
      publication?.__typename === "Comment"
    ) {
      formattedPrefix = publication?.profile?.picture;
    }
  }
  if (!formattedPrefix?.original) {
    profileImage = "";
  } else if (formattedPrefix?.original) {
    if (formattedPrefix?.original?.url.includes("http")) {
      profileImage = formattedPrefix?.original.url;
    } else {
      const cut = formattedPrefix?.original?.url.split("://");
      profileImage = `${INFURA_GATEWAY}/ipfs/${cut[1]}`;
    }
  } else {
    profileImage = formattedPrefix?.uri;
  }
  return profileImage;
};

export default createProfilePicture;
