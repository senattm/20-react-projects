import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  function randomColorUtiliy(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtiliy(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtiliy(256);
    const g = randomColorUtiliy(256);
    const b = randomColorUtiliy(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", 
        gap: "20px", 
        transition: "background-color 0.5s ease-in-out", 
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15px", 
          marginBottom: "30px", 
        }}
      >
        <button
          onClick={() => {
            setTypeOfColor("hex");
            handleCreateRandomHexColor();
          }}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: typeOfColor === "hex" ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.2)", 
            color: "#ffffff",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Create HEX Color
        </button>

        <button
          onClick={() => {
            setTypeOfColor("rgb");
            handleCreateRandomRgbColor();
          }}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            backgroundColor: typeOfColor === "rgb" ? "rgba(255, 255, 255, 0.45)" : "rgba(255, 255, 255, 0.2)", 
            color: "#ffffff",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Create RGB Color
        </button>
      </div>

      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          backgroundColor: "#28a745", 
          color: "white",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.2)",
          transition: "background-color 0.3s ease, transform 0.3s ease",
          marginBottom: "50px", 
        }}
      >
        Generate Random Color
      </button>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", 
          backgroundColor: "rgba(0, 0, 0, 0.2)", 
          padding: "20px 40px",
          borderRadius: "12px",
        }}
      >
        <h3
          style={{
            fontSize: "2.5rem",
            marginBottom: "10px",
            fontWeight: "300",
          }}
        >
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h3>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
          }}
        >
          {color}
        </h1>
      </div>
    </div>
  );
}