import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const signUser = atomWithStorage("mainUser", "" || null);
const myEmail = atomWithStorage("myEmail", "");
const myToggle = atomWithStorage("myEmail", false);
const enc = atomWithStorage("enc", "");

export const useUser = () => {
  return useAtom(signUser);
};

export const useEmailValue = () => {
  return useAtom(myEmail);
};

export const useToggleValue = () => {
  return useAtom(myToggle);
};

export const useEnc = () => {
  return useAtom(enc);
};
