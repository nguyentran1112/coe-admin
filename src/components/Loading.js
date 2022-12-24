import * as React from "react";
import Lottie from "lottie-react";
import img from "../constants";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie
        loop={true}
        style={{
          height: "50%",
          width: "50%",
        }}
        animationData={img.loading}
        resizeMode="cover"
      />
    </div>
  );
};

export default Loading;
