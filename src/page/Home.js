import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Lottie from "lottie-react";
import img from "../constants";
import { Link } from "react-router-dom";

const Home = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 1200;

  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
         the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
         effect to only run when the component mounts, and not each time it updates.
         We only want the listener to be added once */
  }, []);
  return width < breakpoint ? (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          zIndex: 1,

          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            borderRadius: 4,

            boxShadow: "1px 2px 9px #1976d2",
            padding: "2em",
          }}
        >
          <img
            alt="logo"
            src={img.logoCOE}
            style={{
              width: 100,
              height: 100,
              boxShadow: "1px 2px 9px #77E9EA",
              borderRadius: "50%",
            }}
            loading="lazy"
          />
          <CardContent>
            <Typography variant="h4" component="div" sx={{ color: "#1976d2" }}>
              COE - ADMIN
            </Typography>
            <Typography variant="body1">
              Hệ thống quản lý và giám sát
              <br />
              {"nhân viên đi bảo trì"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to="/auth" variant="outlined" size="small">
              ĐĂNG NHẬP
            </Button>
          </CardActions>
          <Typography color="text.secondary" sx={{ fontSize: "10px"}}>
            Copyright © 2022 COE - CARE OF EVERYTHING
          </Typography>
        </Box>
      </div>
      <Lottie
        loop={true}
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
        }}
        animationData={img.backgroundDot}
        resizeMode="cover"
      />
    </>
  ) : (
    <div style={{ height: "6vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "94vh",
        }}
      >
        <Box
          sx={{
            Width: 300,
            borderRadius: 4,
            mr: 20,
            boxShadow: "1px 2px 9px #1976d2",
            padding: "2em",
          }}
        >
          <img
            alt="logo"
            src={img.logoCOE}
            style={{
              width: 100,
              height: 100,
              boxShadow: "1px 2px 9px #77E9EA",
              borderRadius: "50%",
            }}
            loading="lazy"
          />
          <CardContent>
            <Typography variant="h4" component="div" sx={{ color: "#1976d2" }}>
              COE - ADMIN
            </Typography>
            <Typography variant="body1">
              Hệ thống quản lý và giám sát
              <br />
              {"nhân viên đi bảo trì"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to="/auth" variant="outlined" size="small">
              ĐĂNG NHẬP
            </Button>
          </CardActions>
        </Box>
        <Lottie
          style={{ width: 600, height: 600 }}
          animationData={img.adminImg}
          loop={true}
        />
      </div>
      <Typography color="text.secondary" sx={{ fontSize: "12px" }}>
        Copyright © 2022 COE - CARE OF EVERYTHING
      </Typography>
    </div>
  );
};

export default Home;
