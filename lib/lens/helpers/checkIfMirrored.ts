import hasMirroredPost from "../../../graphql/queries/hasMirrored";

const checkIfMirrored = async (
  arr: any[],
  lensProfile: string
): Promise<any> => {
  try {
    let hasMirroredArr: boolean[] = [];
    for (let i = 0; i < arr!.length; i++) {
      const hasMirrored = await hasMirroredPost(
        {
          publicationId: arr![i]?.id,
        },
        lensProfile
      );
      if (hasMirrored?.data?.publication?.mirrors?.length > 0) {
        hasMirroredArr.push(true);
      } else {
        hasMirroredArr.push(false);
      }
    }

    return hasMirroredArr;
  } catch (err: any) {
    console.error(err);
  }
};

export default checkIfMirrored;
