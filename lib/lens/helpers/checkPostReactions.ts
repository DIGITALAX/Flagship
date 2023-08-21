import {
  hasReactedIndi,
  hasReactedPost,
} from "../../../graphql/queries/hasReacted";

const checkPostReactions = async (
  publicationObject: any,
  lensProfile: string | undefined,
  indi?: boolean,
  order?: boolean
): Promise<any> => {
  let hasReactedArr: any[] = [];
  let hasReacted: any;
  try {
    if (indi) {
      const data = await hasReactedIndi(publicationObject, {
        profileId: lensProfile,
      });
      hasReacted = data.data.publication;
    } else {
      const data = await hasReactedPost(publicationObject, {
        profileId: lensProfile,
      });
      hasReacted = data.data.publications.items;
    }

    if (hasReacted.length < 1) {
      return [];
    } else {
      for (let i = 0; i < hasReacted.length; i++) {
        if (hasReacted[i].reaction === "UPVOTE") {
          hasReactedArr.push(true);
        } else {
          hasReactedArr.push(false);
        }
      }
      if (order) {
        return hasReactedArr;
      } else {
        return hasReactedArr.sort(
          (a: any, b: any) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
        );
      }
    }
  } catch (err: any) {
    console.error(err.message);
  }
};

export default checkPostReactions;
