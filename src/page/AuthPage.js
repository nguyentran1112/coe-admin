import * as React from "react";
import Lottie from "lottie-react";
import img from "../constants";
import { Auth } from "../components/Form/Auth";
import { useNavigate } from "react-router-dom";
import { getAllEmp } from "../redux/employee";
import { useDispatch } from "react-redux";
import { getAllMaintenance } from "../redux/maintenance ";
import { getAllClient } from "../redux/client";
const AuthPage = ({ auth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    const token = auth.token
    if (auth.token) {
      dispatch(getAllEmp({token}));
      dispatch(getAllMaintenance({token}));
      dispatch(getAllClient({token}));
      navigate("/dashBoard");
    }
  }, [JSON.stringify(auth)]);
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          zIndex: 1,
          flexDirection: "column",
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
        <Auth />
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
  );
};

export default AuthPage;
