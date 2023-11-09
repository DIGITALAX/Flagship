import { FollowModuleRedeemInput } from "../../../types/generated";

const createFollowModule = (
  type: string | undefined,
  value: number,
  currency: string | undefined
): FollowModuleRedeemInput | undefined => {
  let followModule: FollowModuleRedeemInput | undefined;

  if (value && currency && type !== "FreeFollowModule") {
    followModule = {
      feeFollowModule: {
        amount: {
          currency,
          value: String(Number(value).toFixed(2)),
        },
      },
    };
  }

  return followModule;
};

export default createFollowModule;
