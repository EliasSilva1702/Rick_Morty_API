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
      <input
        ref={inputRef}
        type="text"
        placeholder="Search..."
        className="border"
        inputMode="numeric"
      />
      <button>Search</button>
      {
        error && <p style={{ color: "red" }}>{error}</p>
      }
    </form>
  );
};
