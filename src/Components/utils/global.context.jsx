import { createContext, useMemo, useReducer } from "react";

// Estado inicial
export const initialState = { theme: "light", dentists: [] };

// Crear el contexto global
export const ContextGlobal = createContext(undefined);


const globalReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_DENTISTS":
      return { ...state, dentists: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  const contextValue = useMemo(() => {
    return {
      state,
      setTheme: (theme) => dispatch({ type: "SET_THEME", payload: theme }),
      setData: (data) => dispatch({ type: "SET_DATA", payload: data }),
      setDentists: (dentists) =>
        dispatch({ type: "SET_DENTISTS", payload: dentists }), 
    };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
