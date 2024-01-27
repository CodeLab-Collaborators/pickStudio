import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const signUser = atomWithStorage("mainUser", "" || null);
const signUserData = atomWithStorage("signUserData", {} || null);
const myEmail = atomWithStorage("myEmail", "");
const myToggle = atom(false);
const enc = atomWithStorage("enc", "");

const formSteps1 = atomWithStorage("formSteps1", {} || null);
const formSteps2 = atomWithStorage("formSteps2", {} || null);
const formSteps3 = atomWithStorage("formSteps3", {} || null);

const imagesForStudio = atomWithStorage("imagesForStudio", {} || null);

const booked = atomWithStorage("booked", {} || null);

export const useUser = () => {
  return useAtom(signUser);
};

export const useSignUserData = () => {
  return useAtom(signUserData);
};

export const useImagesStudio = () => {
  return useAtom(imagesForStudio);
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

export const useFormSteps1 = () => {
  return useAtom(formSteps1);
};

export const useFormSteps2 = () => {
  return useAtom(formSteps2);
};

export const useFormSteps3 = () => {
  return useAtom(formSteps3);
};

export const useBooked = () => {
  return useAtom(booked);
};
