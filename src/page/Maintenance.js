import * as React from "react";
import AppBarCustom from "../components/AppBarCustom";
import { DataGrid } from "@mui/x-data-grid";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { getAllEmp } from "../redux/employee";
import { useDispatch, useSelector } from 'react-redux'
import { getAllMaintenance } from "../redux/maintenance ";
import Box from '@mui/material/Box';
import UpdateInfo from "../components/popup/UpdateInfo";
const columns = [
  { field: "date", headerName: "Date Time", width: 130 },
  { field: "description", headerName: "Description", width: 180 },
  { field: "startHour", headerName: "Start hour", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "note", headerName: "Note", width: 130 },
  { field: "address", headerName: "Address", width: 130 },
  {
    field: "id",
    headerName: "ID",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  { field: "status", headerName: "Status", width: 130 },
];


const Maintenance  = ({maintenance}) => {
  const [maintenanceList, setMaintenanceList] = React.useState([]);
  const [maintenanceId, setMaintenanceId] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state)
  const changePopup = (bool) => {
    setShowPopup(bool)
  }
  var data = localStorage.getItem("persist:root");
  var token = JSON.parse(JSON.parse(data).auth).token;

  var listMaintenance = maintenance.listMaintenance;
  React.useEffect(() => {
    dispatch(getAllMaintenance({token}));
    setMaintenanceList(listMaintenance.map((maintenance) => {
      return({
        date: maintenance.date,
        description: maintenance.description,
        startHour: maintenance.username,
        id: maintenance._id,
        phone: maintenance.phone,
        note: maintenance.noted,
        address: maintenance.address,
        status: maintenance.status
      });
    }));
    
  },[]);
  return (
    <>
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
        <Box sx={{ height: 400, width: "100%", '& .cold': {
          backgroundColor: '#b9d5ff91',
          color: '#1a3e72',
        },
        '& .hot': {
          backgroundColor: '#ff943975',
          color: '#1a3e72',
        }, }}>
          
          <DataGrid
            onRowClick={(event)=> {
              changePopup(true)
              setMaintenanceId(event.id)
              console.log(event)

            }}
            rows={maintenanceList}
            columns={columns}
            pageSize={maintenanceList?.length}
            rowsPerPageOptions={[maintenanceList?.length]}
            //checkboxSelection
            getCellClassName={(params) => {
              if (params.field === 'status' && params.value == "unassigned") {
                return 'hot';
              }
              else if ((params.field === 'status' && params.value ==  "assigned")) {
                return 'cold'
              }
              
             
            }}
          />
        </Box>
      </div>
      {showPopup?<UpdateInfo changePopup={changePopup} maintenanceId ={maintenanceId}/>:null}
    </div>
    </>
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
