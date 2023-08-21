const createFollowModule = (
    type: string | undefined,
    value: number,
    currency: string | undefined,
    id: string
  ): any => {
    let followModule: any;
    if (type === "FreeFollowModule" || !type) {
      followModule = null;
    } else if (type === "RevertFollowModule") {
      followModule = {
        revertFollowModule: true,
      };
    } else if (type === "ProfileFollowModule") {
      followModule = {
        profileFollowModule: {
          profileId: id,
        },
      };
    } else {
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
  