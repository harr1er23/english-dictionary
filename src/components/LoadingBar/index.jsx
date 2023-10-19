import React, {CSSProperties} from 'react';
import ClipLoader from "react-spinners/ClipLoader";

// type loadingBarProps ={
//   loading: boolean;
// }

const LoadingBar = ({loading}) => {
    const override = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        margin: "auto"
      };

  return (
    <ClipLoader
        color={"var(--text-hover-color)"}
        loading={loading}
        size={50}
        cssOverride={override}
      />
  )
}

export default LoadingBar