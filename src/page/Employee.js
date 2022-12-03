import * as React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import AppBarCustom from "../components/AppBarCustom";
import { DataGrid } from "@mui/x-data-grid";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];
const Employee = () => {
  return (
    <div style={{ width: "100%" }}>
      <AppBarCustom />
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
          <div style={styleTextTitle}>Giám sát, quản lý nhân viên</div>
        </div>
        </div>
      <div style={{padding:"0 16px 0 16px",display: "flex", alignItems: "center" }}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              //checkboxSelection
            />
          </div>
       
      </div>
    </div>
  );
};
export default Employee;

const styleTitle = {
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    borderBottom: "1px solstt",
    alignItems: "center",
    color: "#1976D2"
  };
  
  const styleTextTitle = {
    marginLeft: 8,
  };
  
