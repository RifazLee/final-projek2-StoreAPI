import React from "react";

const SummaryItem = ({
    name,
    price
    }) => {
  return (
    <>
        <div className="col">{name}</div>
        <div className="col text-right">$ {price}</div>
    </>
  );
};

export default SummaryItem;
