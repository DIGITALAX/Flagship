import { AnyAction, Dispatch } from "redux";
import createDispatcherRequest from "../../../graphql/mutations/dispatcher";
import { setDispatcher } from "../../../redux/reducers/dispatcherSlice";

const checkDispatcher = async (
  dispatch: Dispatch<AnyAction>,
  profileId: string,
  relay?: boolean
): Promise<void> => {
  try {
    if (profileId) {
      dispatch(setDispatcher(!relay ? false : relay));
      if (relay) {
        await createDispatcherRequest({
          profileId,
        });
      }
    }
  } catch (err: any) {
    console.error(err.message);
  }
};

export default checkDispatcher;
