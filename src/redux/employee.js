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
  () =>
  async (dispatch) => {
    const res = await axios.get(
      "https://coe-five.vercel.app/v1/employee/getAllEmployee"
    );
    dispatch(getAllEmployeeSuccess(res.data));
    
  };



export default employee.reducer;
