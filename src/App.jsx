import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { CartInfo } from "./components/CartInfo";
import { ResidentsList } from "./components/ResidentsList";
import { Search } from "./components/Search";
import { Hero } from "./components/Hero";

function App() {
  const [data, dataFetch] = useFetch();
  const [locationId, setLocationId] = useState(1);

  useEffect(() => {
    dataFetch(`https://rickandmortyapi.com/api/location/${locationId}`);
  }, [locationId]);

  return (
    <div>
      <Hero />
      <div className="p-4 m-4">
        <h1>Rick and Morty API</h1>
        <Search setLocationId={setLocationId} />
        <CartInfo data={data} />
        <ResidentsList residents={data?.residents} />
      </div>
    </div>
  );
}

export default App;
