import Image from "next/legacy/image";
import { FunctionComponent } from "react";
import { RiCloseCircleFill } from "react-icons/ri";
import { INFURA_GATEWAY } from "../../../lib/lens/constants";
import { ImageUploadsProps, UploadedMedia } from "../../../types/general.types";

const ImageUploads: FunctionComponent<ImageUploadsProps> = ({
  handleRemoveImage,
  commentLoading,
  postImagesDispatched,
}): JSX.Element => {
  return (
    <div className="relative w-full h-fit grid grid-flow-col auto-cols-auto">
      <div className="relative w-fit h-full overflow-x-scroll grid grid-flow-col auto-cols-auto gap-2">
        {postImagesDispatched?.map((image: UploadedMedia, index: number) => {
          return (
            <div
              key={index}
              className={`relative w-12 h-12 border-2 border-black rounded-lg bg-spots grid grid-flow-col auto-cols-auto col-start-${
                index + 1
              }`}
            >
              <div className="relative w-full h-full flex col-start-1 grid grid-flow-col auto-cols-auto">
                {image.type !== 0 ? (
                  <Image
                    src={
                      image.type === 1
                        ? `${INFURA_GATEWAY}/ipfs/${image.cid}`
                        : `${image.cid}`
                    }
                    layout="fill"
                    objectFit="cover"
                    objectPosition={"center"}
                    className="rounded-md absolute"
                    draggable={false}
                  />
                ) : (
                  <video
                    muted
                    playsInline
                    autoPlay
                    controls
                    className="rounded-md absolute w-full h-full object-cover"
                  >
                    <source
                      src={`${INFURA_GATEWAY}/ipfs/${image.cid}`}
                      type="video/mp4"
                    />
                  </video>
                )}
                <div
                  className={`relative w-fit h-fit col-start-1 justify-self-end self-start p-px ${
                    !commentLoading && "cursor-sewingHS active:scale-95"
                  }`}
                  onClick={() => {
                    !commentLoading ? handleRemoveImage(image, true) : {};
                  }}
                >
                  <RiCloseCircleFill color="white" size={28} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageUploads;
