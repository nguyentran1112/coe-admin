import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listClient: null,
};

const client = createSlice({
  name: "client",
  initialState,
  reducers: {
    getAllClientSuccess(state, action) {
      state.listClient = action.payload
      console.log(state.listClient)
    },
    
  },
});

const { getAllClientSuccess } = employee.actions;

export const getAllEmp =
  () =>
  async (dispatch) => {
    const res = await axios.get(
      "https://coe-five.vercel.app/v1/user/getAllUser"
    );
    dispatch(getAllClientSuccess(res.data));
    
  };



export default client.reducer;
