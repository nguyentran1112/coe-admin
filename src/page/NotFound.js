import * as React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import img from "../constants";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Lottie
        style={{ width: 500, height: 500 }}
        animationData={img.notFound}
        loop={true}
      />
      <h2>Not Found</h2>

      <Button
        component={Link}
        to="/"
        sx={{ my: 4, boxShadow: "1px 2px 9px #1976D2" }}
        variant="contained"
      >
        Quay về
      </Button>
    </div>
  );
};

export default NotFound;
