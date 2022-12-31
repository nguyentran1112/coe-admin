import * as React from "react";
import Lottie from "lottie-react";
import img from "../constants";
import { Auth } from "../components/Form/Auth";
import { useNavigate } from "react-router-dom";
const AuthPage = ({ auth }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (auth.token) {
      //console.log(auth)
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
