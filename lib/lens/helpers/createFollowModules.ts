import { FollowModuleRedeemInput } from "../../../types/generated";

const createFollowModule = (
  type: string | undefined,
  value: number,
  currency: string | undefined,
): FollowModuleRedeemInput | undefined => {
  let module: FollowModuleRedeemInput | undefined;

  if (value && currency && type !== "FreeFollowModule") {
    module = {
      feeFollowModule: {
        amount: {
          currency,
          value: String(Number(value).toFixed(2)),
        },
      },
    };
  }

  return module;
};

export default createFollowModule;
