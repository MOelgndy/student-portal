//TODO: Remove if unused
import { useState, createContext } from 'react';

const NameContext = createContext();

const NameContextProvider = ({ children }) => {
  const [State, setState] = useState();

  const value = { State, setState };

  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
};

export { NameContext, NameContextProvider };
