import { AnyAction, Dispatch } from "redux";
import {
  ApprovalAllowance,
  FollowModuleType,
  OpenActionModuleType,
  ReferenceModuleType,
} from "../../../types/generated";
import approvedModuleAllowance from "../../../graphql/queries/approvedAllowance";
import approvedData from "../../../graphql/queries/approvedData";
import { setApprovalArgs } from "../../../redux/reducers/approvalArgsSlice";

const checkApproved = async (
  currencyAddress: string,
  collectModule: OpenActionModuleType | null,
  followModule: FollowModuleType | null,
  referenceModule: ReferenceModuleType | null,
  value: string,
  dispatch: Dispatch<AnyAction>,
  address: string | undefined,
  profileId: string
): Promise<ApprovalAllowance | void> => {
  if (!currencyAddress || !address || !profileId) {
    return;
  }
  try {
    const response = await approvedModuleAllowance({
      currencies: [currencyAddress],
      openActionModules: collectModule ? [collectModule] : [],
      followModules: followModule ? [followModule] : [],
      referenceModules: referenceModule ? [referenceModule] : [],
    });
    let approvalArgs: any;
    if (collectModule) {
      approvalArgs = await approvedData({
        allowance: {
          currency: currencyAddress,
          value,
        },
        module: {
          openActionModule: collectModule,
        },
      });
    } else if (followModule) {
      approvalArgs = await approvedData({
        allowance: {
          currency: currencyAddress,
          value,
        },
        module: {
          followModule: followModule,
        },
      });
    }
    dispatch(
      setApprovalArgs(approvalArgs?.data?.generateModuleCurrencyApprovalData)
    );
    return response?.data?.approvedModuleAllowanceAmount[0];
  } catch (err: any) {
    console.error(err.message);
  }
};

export default checkApproved;
