import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  token: null,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.token = action.payload.accessToken;
    },
    logoutSuccess(state, action) {
      state.token = null;
    },
    registerSuccess(state, action) {
      state.token = action.payload.accessToken;
    }
  },
});

const { loginSuccess, logoutSuccess } = auth.actions;

export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const res = await axios.post(
      "https://coe-five.vercel.app/v1/admin/loginAdmin",
      { email, password }
    );
    dispatch(loginSuccess(res.data));
  };

export const logout = () => async (dispatch) => {
  dispatch(logoutSuccess());
};

export default auth.reducer;
