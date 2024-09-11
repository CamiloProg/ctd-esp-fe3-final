import React, { useContext } from "react";
import Form from "../Components/Form";
import { ContextGlobal } from "../Components/utils/global.context";

const Contact = () => {
  const { state } = useContext(ContextGlobal);
  const { theme } = state;
  return (
    <div
      className={`min-h-[89.8vh] p-4 text-center ${
        theme === "dark" ? "bg-gray-600 text-white" : "bg-white text-black"
      } `}
    >
      <h2 className='text-3xl font-bold'>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y te contactaremos</p>
      <Form />
    </div>
  );
};

export default Contact;
