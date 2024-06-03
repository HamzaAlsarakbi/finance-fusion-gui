import { createAppSlice } from "@/app/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

interface PlanForm {
  username: string;
  password: string;
}

export interface PlanSliceState extends PlanForm {
  attempts: number;
}

const initialState: PlanSliceState = {
  username: "",
  password: "",
  attempts: 0,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const planSlice = createAppSlice({
  name: "plan",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    incrementAttempt: create.reducer((state) => {
      state.attempts++;
    }),
    resetAttempts: create.reducer((state) => {
      state.attempts = 0;
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    setForm: create.reducer((state, action: PayloadAction<PlanForm>) => {
      const { username, password } = action.payload;
      state.username = username;
      state.password = password;
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectUsername: (plan: PlanSliceState) => plan.username,
    selectPassword: (plan: PlanSliceState) => plan.password,
    selectAttempts: (plan: PlanSliceState) => plan.attempts,
  },
});

// Action creators are generated for each case reducer function.
export const { incrementAttempt, resetAttempts, setForm } = planSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectUsername, selectPassword, selectAttempts } =
  planSlice.selectors;
