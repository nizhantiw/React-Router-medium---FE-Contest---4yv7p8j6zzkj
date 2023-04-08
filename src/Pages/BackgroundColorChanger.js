import React from "react";
import { useParams } from "react-router-dom";

function BackgroundColorChanger() {
  const { colorname } = useParams();

  return (
    <main style={{ height: "100vh", backgroundColor: colorname }}>
      <p>Background Color Changer</p>
    </main>
  );
}

export default BackgroundColorChanger;
