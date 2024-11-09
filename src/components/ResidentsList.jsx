import React, { useState } from "react";
import { ResidentCard } from "./ResidentCard";

export const ResidentsList = ({ residents = [], isLoading }) => {
  // Default empty array
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 5;

  // Calcula los índices de inicio y fin de la página actual
  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidents = residents.slice(
    indexOfFirstResident,
    indexOfLastResident
  );

  // Cambia la página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col items-center mx-auto px-4">
      <h2 className="text-xl md:text-6xl my-6 font-bold mb-4">Residents</h2>

      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-xl md:text-4xl text-gray-600">Loading...</p>
        </div>
      ) : (
        <>
          <div
            className="grid gap-4 w-full 
                        grid-cols-1 
                        sm:grid-cols-2 
                        md:grid-cols-3 
                        lg:grid-cols-4 
                        xl:grid-cols-5 m-4"
          >
            {currentResidents.map((resident) => {
              const residentSplit = resident.split("/");
              const id = residentSplit[residentSplit.length - 1];
              return <ResidentCard url={resident} key={id} />;
            })}
          </div>

          {/* Controles de Paginación */}
          <div className="flex flex-wrap gap-2 my-4">
            {/* Botón de página anterior */}
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 py-1 border border-black rounded disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {/* Botones de número de página */}
            {Array.from(
              { length: Math.ceil(residents.length / residentsPerPage) },
              (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`px-2 py-1 border border-black rounded ${
                    currentPage === i + 1 ? "bg-green-500 text-black " : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}

            {/* Botón de página siguiente */}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage === Math.ceil(residents.length / residentsPerPage)
              }
              className="px-2 py-1 border border-black rounded disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};
