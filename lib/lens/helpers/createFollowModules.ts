import { FollowModuleInput } from "../../../types/generated";

const createFollowModule = (
  type: string | undefined,
  value: number,
  currency: string | undefined,
  recipient: string
): FollowModuleInput => {
  let followModule: FollowModuleInput = {
    freeFollowModule: type === "FreeFollowModule" || !type ? true : undefined,
    revertFollowModule: type === "RevertFollowModule" ? true : undefined,

    feeFollowModule: value
      ? {
          amount: {
            currency,
            value: String(Number(value).toFixed(2)),
          },
          recipient,
        }
      : undefined,
  };

  return followModule;
};

export default createFollowModule;
