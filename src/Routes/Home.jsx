import React, { useEffect, useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

function Home() {
  const { state, setDentists } = useContext(ContextGlobal);
  const { theme } = state;

  useEffect(() => {
    if (state.dentists.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => setDentists(data))
        .catch((error) =>
          console.error("Error al obtener los dentistas:", error)
        );
    }
  }, [setDentists, state.dentists]);

  return (
    <div
      className={`flex w-full min-h-[89.8vh] flex-wrap gap-4 justify-center items-center p-4 ${
        theme === "dark" ? "bg-gray-600 text-white" : "bg-white text-black"
      } `}
    >
      {state.dentists.map((dentist) => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
}

export default Home;
