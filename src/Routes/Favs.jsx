import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
  const [favorites, setFavorites] = useState([]);
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    }
  }, []);

  const updateFavorites = () => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    } else {
      setFavorites([]);
    }
  };

  return (
    <div
      className={`min-h-[89.8vh] p-4 text-center ${
        theme === "dark" ? "bg-gray-600 text-white" : "bg-white text-black"
      } `}
    >
      <h1 className='text-3xl font-bold'>Dentists Favs</h1>
      <div className='flex w-full flex-wrap justify-center gap-4 items-center p-4'>
        {favorites.length > 0 ? (
          favorites.map((dentist) => (
            <Card
              key={dentist.id}
              dentist={dentist}
              updateFavorites={updateFavorites}
            />
          ))
        ) : (
          <p>No favorites added yet.</p>
        )}
      </div>
    </div>
  );
};

export default Favs;
