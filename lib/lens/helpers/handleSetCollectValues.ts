import { AnyAction, Dispatch } from "redux";
import lodash from "lodash";
import {
  Erc20,
  SimpleCollectOpenActionModuleInput,
} from "../../../types/generated";
import { setCollectValueType } from "../../../redux/reducers/collectValueSlice";

const handleSetCollectValues = (
  value: number,
  chargeCollect: string,
  dispatch: Dispatch<AnyAction>,
  limit: number,
  enabledCurrency: string | undefined,
  enabledCurrencies: Erc20[],
  collectible: string,
  audienceType: string,
  timeLimit: string,
  limitedEdition: string,
  referral: number,
  address: string
): void => {
  const setCurrency: Erc20[] = lodash.filter(
    enabledCurrencies,
    (currency) => currency.symbol === enabledCurrency
  );

  let collectModuleType: SimpleCollectOpenActionModuleInput | undefined;

  if (collectible === "yes") {
    collectModuleType = {
      amount: chargeCollect
        ? {
            currency: setCurrency[0]?.contract?.address,
            value: String(value),
          }
        : undefined,
      collectLimit: limitedEdition === "yes" ? String(limit) : undefined,
      endsAt:
        timeLimit === "yes"
          ? new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
          : undefined,
      followerOnly: audienceType === "everyone" ? false : true,
      recipient: address as string,
      referralFee: Number(Number(referral).toFixed(2)),
    };
  }
  dispatch(setCollectValueType(collectModuleType));
};

export default handleSetCollectValues;
