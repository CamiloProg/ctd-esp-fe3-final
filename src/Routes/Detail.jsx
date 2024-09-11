import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); 
  const { state } = useContext(ContextGlobal);
  const { theme } = state;

  useEffect(() => {
    const fetchDentist = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setDentist(data);


        const storedFavs = localStorage.getItem("favorites");
        const favorites = storedFavs ? JSON.parse(storedFavs) : [];
        const isAlreadyFavorite = favorites.some((fav) => fav.id === data.id);
        setIsFavorite(isAlreadyFavorite);
      } catch (error) {
        console.error("Error fetching dentist data:", error);
      }
    };

    fetchDentist();
  }, [id]);

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
  };

  if (!dentist) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={`flex flex-col min-h-[89.8vh] gap-4 items-center p-4 ${
        theme === "dark" ? "bg-gray-600 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className='text-3xl font-bold mb-4'>Dentist Detail</h1>
      <div
        className={`border flex gap-4 justify-center items-center p-4 hover:border-blue-400 ${
          theme === "dark"
            ? "bg-gray-800 text-white border-gray-900"
            : "bg-white text-black"
        }`}
      >
        <img src='/images/doctor.jpg' alt='Doctor' className='h-52' />
        <div>
          <p>
            <strong>Name:</strong> {dentist.name}
          </p>
          <p>
            <strong>Username:</strong> {dentist.username}
          </p>
          <p>
            <strong>Email:</strong> {dentist.email}
          </p>
          <p>
            <strong>Phone:</strong> {dentist.phone}
          </p>
          <p>
            <strong>Website:</strong> {dentist.website}
          </p>
          <p>
            <strong>Address:</strong> {dentist.address.street},{" "}
            {dentist.address.suite}, {dentist.address.city},{" "}
            {dentist.address.zipcode}
          </p>
          <p>
            <strong>Company:</strong> {dentist.company.name}
          </p>
          <p>
            <strong>CatchPhrase:</strong> {dentist.company.catchPhrase}
          </p>
        </div>
      </div>


      <button
        className={` w-96 text-center ${
          isFavorite ? "bg-yellow-400" : "bg-blue-400"
        } p-2`}
        onClick={toggleFavorite}
      >
        {isFavorite ? "REMOVE FROM FAVORITES" : "ADD TO FAVORITES"}
      </button>
    </div>
  );
};

export default Detail;
