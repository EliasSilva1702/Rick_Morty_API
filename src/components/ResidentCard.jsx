import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const ResidentCard = ({ url }) => {
  const [resident, setResident] = useFetch();

  useEffect(() => {
    setResident(url);
  }, [url]);

  return (
      <div className="w-fit mx-auto flex flex-col">
        <section className="flex flex-col items-center gap-4 border-2 border-slate-700 p-4 rounded-lg h-full w-64">
          <p>{resident?.name}</p>
          <span
            className={`px-2 rounded-lg ${
              resident?.status === "Alive"
                ? "text-green-900 bg-green-500"
                : resident?.status === "Dead"
                ? "text-red-700 bg-red-400"
                : "text-yellow-900 bg-yellow-300"
            }`}
          >
            {resident?.status}
          </span>
          <img
            src={resident?.image}
            alt={resident?.name}
            className="w-64 h-64 rounded-lg object-cover"
          />
          <p>{resident === 0 ? console.log("Resident is 0") : resident?.name}</p>
        </section>
    </div>
  );
};
