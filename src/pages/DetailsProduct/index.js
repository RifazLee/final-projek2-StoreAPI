import React from "react";
import { Outlet } from "react-router-dom";

function Details() {
  return (
    <>
      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  );
}

export default Details;
