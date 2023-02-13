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

const { loginSuccess, logoutSuccess, registerSuccess } = auth.actions;

// export const resgister = ({email, password}) => {
//   async (dispatch) => {
//     try {
//       const res = await axios.post({

//       })
//       dispatch(registerSuccess(re))
//     }
//     catch {

//     }
//   }
// }
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/admin/loginAdmin`,
        { email, password }
      );
      dispatch(loginSuccess(res.data));
    }
    catch(err) {
      console.log(err)
    }
  };

export const logout = () => async (dispatch) => {
  dispatch(logoutSuccess());
};

export default auth.reducer;
