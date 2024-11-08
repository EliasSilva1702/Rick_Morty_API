import React from "react";
import { ResidentCard } from "./ResidentCard";

export const ResidentsList = ({ residents }) => {
  return (
    <div>
      <h2>Residents</h2>
      <div className="grid grid-cols-2 w-full h-full md:grid-cols-3 gap-2">
        {residents?.map((resident) => {
          const residentSplit = resident.split("/");
          const id = residentSplit[(residentSplit.length - 1)];
          return <ResidentCard url={resident} key={id} />;
        })}
      </div>
    </div>
  );
};
