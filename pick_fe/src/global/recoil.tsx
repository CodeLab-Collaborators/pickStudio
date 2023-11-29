import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const imageState = atom({
  key: "imagesUpload",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
