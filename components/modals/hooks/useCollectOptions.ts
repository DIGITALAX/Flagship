import { useEffect, useMemo, useState } from "react";
import availableCurrencies from "../../../graphql/queries/availableCurrencies";
import { Erc20, Profile } from "../../../types/generated";
import handleSetCollectValues from "../../../lib/lens/helpers/handleSetCollectValues";
import { AnyAction, Dispatch } from "redux";

const useCollectOptions = (
  dispatch: Dispatch<AnyAction>,
  lensProfile: Profile | undefined,
  collectOpen: boolean,
  address: `0x${string}`
) => {
  const [enabledCurrencies, setEnabledCurrencies] = useState<Erc20[]>([]);
  const [audienceType, setAudienceType] = useState<string>("everyone");
  const [enabledCurrency, setEnabledCurrency] = useState<string>();
  const [chargeCollectDropDown, setChargeCollectDropDown] =
    useState<boolean>(false);
  const [audienceDropDown, setAudienceDropDown] = useState<boolean>(false);
  const [currencyDropDown, setCurrencyDropDown] = useState<boolean>(false);
  const [limitedDropDown, setLimitedDropDown] = useState<boolean>(false);
  const [limitedEdition, setLimitedEdition] = useState<string>("no");
  const [collectibleDropDown, setCollectibleDropDown] =
    useState<boolean>(false);
  const [timeLimit, setTimeLimit] = useState<string>("no");
  const [timeLimitDropDown, setTimeLimitDropDown] = useState<boolean>(false);
  const [chargeCollect, setChargeCollect] = useState<string>("no");
  const [collectible, setCollectible] = useState<string>("yes");
  const [limit, setLimit] = useState<number>(1);
  const [value, setValue] = useState<number>(0);
  const [referral, setReferral] = useState<number>(0);
  const audienceTypes: string[] = ["followers", "everyone"];
  const [collectNotif, setCollectNotif] = useState<string>("");

  useMemo(() => {
    if (collectOpen) {
      try {
        availableCurrencies(setEnabledCurrencies, setEnabledCurrency);
      } catch (err) {
        console.error(err);
      }
    }
  }, [collectOpen]);

  const handleCollectValues = (): void => {
    if (value <= 0 && chargeCollect === "yes") {
      setCollectNotif("Please set a Creator Award Value for your comment!");
      return;
    } else if (limitedEdition && limit < 1 && chargeCollect === "yes") {
      setCollectNotif(
        "A limited edition comment must have at least an amount of 1!"
      );
      return;
    } else {
      setCollectNotif("");
    }

    handleSetCollectValues(
      value,
      chargeCollect,
      dispatch,
      limit,
      enabledCurrency,
      enabledCurrencies,
      collectible,
      audienceType,
      timeLimit,
      limitedEdition,
      referral,
      address as string
    );
  };

  useEffect(() => {
    if (address && lensProfile?.id) {
      handleCollectValues();
    }
  }, [
    value,
    chargeCollect,
    limit,
    enabledCurrency,
    enabledCurrencies,
    collectible,
    audienceType,
    timeLimit,
    limitedEdition,
    referral,
    setValue,
    setLimit,
    setLimitedEdition,
    setTimeLimit,
    setEnabledCurrency,
    setReferral,
    setChargeCollect,
    setCollectible,
    setAudienceType,
    collectNotif,
  ]);

  return {
    handleCollectValues,
    collectNotif,
    referral,
    setCollectible,
    collectibleDropDown,
    setCollectibleDropDown,
    collectible,
    setAudienceDropDown,
    audienceType,
    audienceTypes,
    chargeCollect,
    limit,
    limitedEdition,
    audienceDropDown,
    setAudienceType,
    setTimeLimit,
    timeLimit,
    timeLimitDropDown,
    setTimeLimitDropDown,
    setLimitedEdition,
    limitedDropDown,
    setLimitedDropDown,
    setReferral,
    setLimit,
    setChargeCollect,
    setCurrencyDropDown,
    chargeCollectDropDown,
    setChargeCollectDropDown,
    enabledCurrencies,
    enabledCurrency,
    currencyDropDown,
    setEnabledCurrency,
    value,
    setValue,
  };
};

export default useCollectOptions;
