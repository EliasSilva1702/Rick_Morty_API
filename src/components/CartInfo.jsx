import React from "react";

export const CartInfo = ({ data }) => {
  return (
    <div className="text-red-700 border-2 border-red-700 rounded-lg p-4 m-4 w-fit">

      <h2>Location:{data?.name}</h2>
      <div className="">
        <p>{data?.type}</p>
      </div>
      <div className="">
        <p>{data?.dimension}</p>
      </div>
      <div className="">
        <p>{data?.residents?.lenght}</p>
      </div>
    </div>
  );
};
