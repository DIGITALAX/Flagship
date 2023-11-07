import { Erc20, LimitType } from "../../types/generated";
import getEnabledCurrencies from "./enabledCurrencies";

const availableCurrencies = async (
  setEnabledCurrencies: (e: Erc20[]) => void,
  setEnabledCurrency: (e: string) => void,
  presetCurrency?: string
): Promise<void> => {
  try {
    const response = await getEnabledCurrencies({
      limit: LimitType.TwentyFive,
    });
    if (response && response.data) {
      setEnabledCurrencies(response.data.currencies.items);
      setEnabledCurrency(
        presetCurrency
          ? presetCurrency
          : response.data.currencies.items[0]?.symbol
      );
    }
  } catch (err: any) {
    console.error(err.message);
  }
};

export default availableCurrencies;
