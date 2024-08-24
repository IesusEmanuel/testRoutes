import React from "react";
import "/src/App.css";

const Text = ({ text }) => {
  return (
    <h1 className="margin poppins uppercase size-3 center">
      { text }
    </h1>
  )
}

export default Text;