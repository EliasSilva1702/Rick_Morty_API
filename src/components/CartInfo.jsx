import React from "react";

export const CartInfo = ({ data }) => {
  return (
    <div className="text-black border-2 border-slate-700 rounded-lg p-4 m-4 w-fit"> 
      <div className="">
        <p>
          <span className="font-bold">Location:</span> {data?.name}
        </p>
      </div>

      <div className="">
        <p>
          <span className="font-bold">Type:</span> {data?.type}
        </p>
      </div>

      <div className="">
        <p>
          <span className="font-bold">Dimension:</span> {data?.dimension}
        </p>
      </div>

      <div className="">
        <p>{data?.residents?.lenght}</p>
      </div>
    </div>
  );
};
