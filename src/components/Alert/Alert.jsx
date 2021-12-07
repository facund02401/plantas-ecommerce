import React from "react";
import "../../styles/Alert.scss";

export default function Alert({ prop }) {
  return (
    <div className="alert">
      <p>{prop}</p>
    </div>
  );
}
