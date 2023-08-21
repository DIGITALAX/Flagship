import { ApolloQueryResult, gql } from "@apollo/client";
import { authClient } from "../../lib/lens/client";


const FOLLOWING = `query($followerAddress: EthereumAddress!) {
    doesFollow(request: { 
        followInfos: [
         {
           followerAddress: $followerAddress,
           profileId: "0x01cc42"
         },
         {
           followerAddress: $followerAddress,
           profileId: "0x84ec"
         },
         {
            followerAddress: $followerAddress,
            profileId: "0x01c97e"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01c6a9"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01befb"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x012a99"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01bbee"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x015ed3"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x016305"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x0197d6"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01cc8c"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x0161a4"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01cd46"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01cd7c"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0xf6b0"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01cd29"
          },
          {
            followerAddress: $followerAddress,
            profileId: "0x01cc8f"
          },
       ]   
    }) {
      followerAddress
      profileId
      follows
    }
  }`;

const getIsFollowing = async (
  followerAddress: string
): Promise<ApolloQueryResult<any>> => {
  return authClient.query({
    query: gql(FOLLOWING),
    variables: { followerAddress },
    fetchPolicy: "no-cache",
  });
};

export default getIsFollowing;
