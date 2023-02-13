import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listEmployee: null,
};

const employee = createSlice({
  name: "employee",
  initialState,
  reducers: {
    getAllEmployeeSuccess(state, action) {
      state.listEmployee = action.payload
      //console.log(state.listEmployee);
    },
    
  },
});

const { getAllEmployeeSuccess } = employee.actions;

export const getAllEmp =
  ({token}) =>
  async (dispatch) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/employee/getAllEmployee`,
      {
        headers: {
          token: 'Bearer ' + token
        }
      }
        
    );
    dispatch(getAllEmployeeSuccess(res.data));
    
  };



export default employee.reducer;
