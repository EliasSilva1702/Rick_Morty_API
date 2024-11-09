import React, { useRef, useState } from "react";

export const Search = ({ setLocationId }) => {
  const inputRef = useRef();
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseInt(inputRef.current.value);

    // Validación para permitir solo valores entre 1 y 126
    if (value < 1 || value > 126 || isNaN(value)) {
      setError("Please enter a number between 1 and 126.");
    } else {
      setError("");
      setLocationId(value); // Actualiza locationId en App
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2 mx-auto items-center justify-center">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search..."
          className="border border-slate-700 rounded-md px-2 py-1 text-green-700 font-semibold overflow-hidden"
          inputMode="numeric"
        />
        <button className="border border-slate-700 px-3 py-1 rounded-md transition hover:bg-green-500">
          Search
        </button>
      </div>
      {error && <p className="text-red-700 my-4 mx-auto font-semibold text-base text-center">{error}</p>}

    </form>
  );
};
