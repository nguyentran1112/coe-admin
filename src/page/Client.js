import * as React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import AppBarCustom from "../components/AppBarCustom";
import { DataGrid } from "@mui/x-data-grid";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { getAllClient } from "../redux/client";
import { useDispatch } from "react-redux";

const columns = [
  { field: "username", headerName: "User name", width: 130 },
  { field: "email", headerName: "Email", width: 180 },
  { field: "phone", headerName: "Phone", width: 130 },
  {
    field: "sex",
    headerName: "Sex",

    width: 90,
  },
  {
    field: "id",
    headerName: "ID",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];


const Client = ({client}) => {
  const [clientList, setClientList] = React.useState([]);
  const dispatch = useDispatch();
  var data = localStorage.getItem("persist:root");
  var token = JSON.parse(JSON.parse(data).auth).token;
  var listClient = client.listClient;
  
  React.useEffect(() => {
    dispatch(getAllClient({token}));
    setClientList(listClient.map((client) => {
      return({
        username: client.username,
        email: client.email,
        phone: client.phone,
        sex: client.sex,
        id: client._id,
      });
    }));
    
  },[JSON.stringify(listClient)]);
  return (
    <div style={{ width: "100%" }}>
      <AppBarCustom />
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <ContactPageIcon/>
          <div style={styleTextTitle}>Danh sách khách hàng</div>
        </div>
      </div>
      <div
        style={{
          padding: "0 16px 0 16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={clientList}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[clientList.length]}
          />
        </div>
      </div>
    </div>
  );
};
export default Client;

const styleTitle = {
  fontSize: 20,
  fontWeight: "bold",
  display: "flex",
  flexDirection: "row",
  textAlign: "left",
  borderBottom: "1px solstt",
  alignItems: "center",
  color: "#1976D2",
};

const styleTextTitle = {
  marginLeft: 8,
};
