"use client";
import React from "react";

function Page() {
  const [color, setColor] = React.useState("white");
  const Button = ({
    buttonText,
    color,
  }: {
    buttonText: string;
    color: string;
  }) => {
    return (
      <button
        style={{
          backgroundColor: color,
        }}
        onClick={() => setColor(color)}
      >
        {buttonText}
      </button>
    );
  };
  return (
    <>
      <main
        style={{
          backgroundColor: color,
          height: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: 30,
          }}
        >
          <Button buttonText="Red" color="red" />
          <Button buttonText="Green" color="green" />
          <Button buttonText="Blue" color="blue" />
          <Button buttonText="White" color="white" />
        </div>
      </main>
    </>
  );
}

export default Page;
