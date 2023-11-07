import { AnyAction, Dispatch } from "redux";
import pollUntilIndexed from "../../../graphql/queries/checkIndexed";
import { setIndexModal } from "../../../redux/reducers/indexModalSlice";

const handleIndexCheck = async (tx: string, dispatch: Dispatch<AnyAction>) => {
  try {
    const indexedStatus = await pollUntilIndexed({
      forTxHash: tx,
    });
    if (indexedStatus) {
      dispatch(
        setIndexModal({
          actionValue: true,
          actionMessage: "Successfully Indexed",
        })
      );
    } else {
      dispatch(
        setIndexModal({
          actionValue: true,
          actionMessage: "Post Unsuccessful, Please Try Again",
        })
      );
    }
    setTimeout(() => {
      dispatch(
        setIndexModal({
          actionValue: false,
          actionMessage: undefined,
        })
      );
    }, 3000);
  } catch (err: any) {
    console.error(err.message);
  }
};

export default handleIndexCheck;
