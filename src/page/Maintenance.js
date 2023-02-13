import * as React from "react";
import AppBarCustom from "../components/AppBarCustom";
import { DataGrid } from "@mui/x-data-grid";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { getAllEmp } from "../redux/employee";
import { useDispatch, useSelector } from 'react-redux'
import { getAllMaintenance } from "../redux/maintenance ";

const columns = [
  { field: "date", headerName: "Date Time", width: 130 },
  { field: "description", headerName: "Description", width: 180 },
  { field: "startHour", headerName: "Start Hour", width: 130 },
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


const Maintenance  = ({maintenance}) => {
  const [maintenanceList, setMaintenanceList] = React.useState([]);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state)
  console.log(selector)
  var data = localStorage.getItem("persist:root");
  var token = JSON.parse(JSON.parse(data).auth).token;
  console.log(token)
  var listMaintenance = maintenance.listMaintenance;
  React.useEffect(() => {
    dispatch(getAllMaintenance({token}));
    setMaintenanceList(listMaintenance.map((maintenance) => {
      return({
        date: maintenance.date,
        description: maintenance.description,
        startHour: maintenance.startHour,
        id: maintenance._id,
      });
    }));
    
  },[JSON.stringify(listMaintenance)]);
  return (
    <div style={{ width: "100%" }}>
      <AppBarCustom />
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
          <div style={styleTextTitle}>Đơn bảo trì</div>
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
            rows={maintenanceList}
            columns={columns}
            pageSize={maintenanceList?.length}
            rowsPerPageOptions={[maintenanceList?.length]}
            //checkboxSelection
          />
        </div>
      </div>
    </div>
  );
};
export default Maintenance;

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
