import FullScreenVideo from "./FullScreenVideo";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ImageLarge from "./ImageLarge";

const Modals = () => {
  const dispatch = useDispatch();
  const imageModal = useSelector(
    (state: RootState) => state.app.imageViewerReducer
  );
  const fullScreen = useSelector(
    (state: RootState) => state.app.fullScreenVideoReducer
  );

  return (
    <>
      {fullScreen.open && <FullScreenVideo />}
      {imageModal?.value && (
        <ImageLarge
          mainImage={imageModal.image}
          dispatch={dispatch}
          type={imageModal.type}
        />
      )}
    </>
  );
};

export default Modals;
