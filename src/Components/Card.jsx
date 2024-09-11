import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

function Card({ dentist, updateFavorites }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    const favorites = storedFavs ? JSON.parse(storedFavs) : [];
    const isAlreadyFavorite = favorites.some((fav) => fav.id === dentist.id);
    setIsFavorite(isAlreadyFavorite);
  }, [dentist.id]);

  const toggleFavorite = () => {
    const storedFavs = localStorage.getItem("favorites");
    let favorites = storedFavs ? JSON.parse(storedFavs) : [];

    const isAlreadyFavorite = favorites.some((fav) => fav.id === dentist.id);

    if (isAlreadyFavorite) {
      favorites = favorites.filter((fav) => fav.id !== dentist.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(false);
      alert(`${dentist.name} ha sido eliminado de favoritos.`);
    } else {
      favorites.push(dentist);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
      alert(`${dentist.name} ha sido agregado a favoritos.`);
    }


    if (updateFavorites) {
      updateFavorites();
    }
  };

  return (
    <div>
      <Link to={`/dentist/${dentist.id}`}>
        <div
          className={`border w-52 flex flex-col justify-center items-center p-4 hover:border-blue-400 ${
            theme === "dark"
              ? "bg-gray-800 text-white border-gray-900"
              : "bg-white text-black"
          }`}
        >
          <img src='/images/doctor.jpg' alt='Logo' />
          <h3 className='font-bold my-2 truncate w-full text-center'>
            {dentist.name}
          </h3>
          <p>{dentist.username}</p>
        </div>
      </Link>

      <button
        className={`w-full text-center ${
          isFavorite ? "bg-yellow-400" : "bg-blue-400"
        }`}
        onClick={toggleFavorite}
      >
        <p>{isFavorite ? "FAVORITE" : "ADD FAV"}</p>
      </button>
    </div>
  );
}

export default Card;
