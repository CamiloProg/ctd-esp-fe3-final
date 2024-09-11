import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && validateEmail(email)) {
      setError(false);
      setSubmitted(true);
      console.log({ name, email });
    } else {
      setError(true);
      setSubmitted(false);
    }
  };

  return (
    <div className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg'>
      {submitted ? (
        <p className='text-green-600 text-lg'>
          Gracias {name}, te contactaremos cuando antes vía el siguiente mail{" "}
          <span className='font-semibold'>{email}</span>
        </p>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='text-gray-700 font-medium'>
              Nombre completo:
            </label>
            <input
              id='name'
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Ingrese su nombre completo'
              className='mt-1 p-2 border text-black border-gray-300 rounded-md w-full'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='text-gray-700 font-medium'>
              Email:
            </label>
            <input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Ingrese su email'
              className='mt-1 p-2 border text-black border-gray-300 rounded-md w-full'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition'
          >
            Enviar
          </button>
          {error && (
            <p className='text-red-600'>
              Por favor verifique su información nuevamente
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default Form;
