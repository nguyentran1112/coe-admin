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
    
    },
    
  },
});

const { getAllClientSuccess } = client.actions;

export const getAllClient =
  ({token}) =>
  async (dispatch) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/user/getAlluser`,
      {
        headers: {
          token: 'Bearer ' + token
        }
      }
        
    );
    dispatch(getAllClientSuccess(res.data));
    
  };


export default client.reducer;
