import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
//import SignIn from './SignIn';
import Login from "../../../container/Login";
import SignUp from "./SignUp";
const Auth = () => {
  const [value, setValue] = React.useState("SignIn");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        typography: "body1",
        backgroundColor: "white",
        boxShadow: "1px 2px 9px #9E9E9E",
        borderRadius: 4,
        margin: "4em",
        padding: "1em",
      }}
    >
      <TabContext value={value} color="success">
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Đăng ký" value="SignUp" />
            <Tab label="Đăng nhập" value="SignIn" />
          </TabList>
        </Box>
        <Box>
          <TabPanel value="SignUp">
            <SignUp />
          </TabPanel>
          <TabPanel value="SignIn">
            <Login />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Auth;
