import * as React from "react";
import AppBarCustom from "../components/AppBarCustom";
import { DataGrid } from "@mui/x-data-grid";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { getAllEmp } from "../redux/employee";
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
    field: "address",
    headerName: "Address",

    width: 180,
  },
  {
    field: "id",
    headerName: "ID",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,

  },
];


const Employee = ({employee}) => {
  const [employeeList, setEmployeeList] = React.useState([]);
  const dispatch = useDispatch();
  
  var data = localStorage.getItem("persist:root");
  var token = JSON.parse(JSON.parse(data).auth).token;
  console.log(token)
  var listEmployee = employee.listEmployee;
  React.useEffect(() => {
    dispatch(getAllEmp({token}));
    setEmployeeList(listEmployee.map((employee) => {
      return({
        username: employee.username,
        email: employee.email,
        phone: employee.phone,
        sex: employee.sex,
        id: employee._id,
        address: employee.address
      });
    }));
    
  },[]);
  return (
    <div style={{ width: "100%" }}>
      <AppBarCustom />
      <div style={{ margin: 16 }}>
        <div style={styleTitle}>
          <SupervisedUserCircleIcon></SupervisedUserCircleIcon>
          <div style={styleTextTitle}>Giám sát, quản lý nhân viên</div>
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
            rows={employeeList}
            columns={columns}
            pageSize={employeeList.lengt5}
            rowsPerPageOptions={[employeeList.length]}
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
  color: "#1976D2",
};

const styleTextTitle = {
  marginLeft: 8,
};
