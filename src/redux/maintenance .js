import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listMaintenance : null,
  updateMaintenance: null
};

const maintenance  = createSlice({
  name: "maintenance",
  initialState,
  reducers: {
    getAllMaintenanceSuccess(state, action) {
      state.listMaintenance = action.payload
    },
    updateMaintenanceSuccess(state, action) {
      state.updateMaintenance = action.payload
    }
    
  },
});

const { getAllMaintenanceSuccess } = maintenance.actions;

export const getAllMaintenance =
  ({token}) =>
  async (dispatch) => {
    const res = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/maintenance/getAllMaintenance`,
      {
        headers: {
          token: 'Bearer ' + token
        }
      }
        
    );
    dispatch(getAllMaintenanceSuccess(res.data));
    
  };
  export const updateMaintenance = 
  ({token, maintenanceId, employeeId}) => 
  async (dispatch) => {
    const res = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/maintenance/employee/receive/${maintenanceId}`,
      {
        headers: {
          token: 'Bearer ' + token
        },
        data: {
          employee: employeeId
        }
      }
    )
    dispatch(updateMaintenance(res.data))
  }



export default maintenance.reducer;
