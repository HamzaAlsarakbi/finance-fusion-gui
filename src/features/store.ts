import { create } from "zustand";
import { LoginSlice, createLoginSlice } from "./login/loginSlice";
import { AppSlice, createAppSlice } from "./app/appSlice";

type StoreSlice = LoginSlice & AppSlice;

export const useBoundedStore = create<StoreSlice>()((...a) => ({
  ...createAppSlice(...a),
  ...createLoginSlice(...a),
}));
