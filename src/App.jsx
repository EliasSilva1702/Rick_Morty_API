import { useEffect, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import { CartInfo } from "./components/CartInfo";
import { ResidentsList } from "./components/ResidentsList";
import { Search } from "./components/Search";
import { Hero } from "./components/Hero";

function App() {
  const [data, dataFetch, isLoading] = useFetch();
  const [locationId, setLocationId] = useState(1);

  useEffect(() => {
    dataFetch(`https://rickandmortyapi.com/api/location/${locationId}`);
  }, [locationId]);

  return (
    <div className="font-host background-gradient min-h-screen">
        <Hero />
        <div className="">
          <section className="flex flex-col items-center mx-auto">
            <h1 className="text-2xl md:text-5xl text-center my-8">
              Rick and Morty API
            </h1>
            <Search setLocationId={setLocationId} />
            <CartInfo data={data} />
          </section>
          <ResidentsList residents={data?.residents} isLoading={isLoading} />
        </div>
    </div>
  );
}

export default App;
