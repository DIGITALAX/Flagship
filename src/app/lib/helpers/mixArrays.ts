import { Publication } from "@/app/componentes/Distro/types/distro.types";

const mixArrays = (arrays: Publication[][]): Publication[] => {
  let maxLength: number = Math.max(...arrays.map((arr) => arr.length));
  let mixedArray: Publication[] = [];

  for (let i = 0; i < maxLength; i++) {
    arrays.forEach((arr: Publication[]) => {
      if (arr[i] !== undefined) {
        mixedArray.push(arr[i]);
      }
    });
  }
  return mixedArray;
};

export default mixArrays;
