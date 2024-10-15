//TODO: Remove if unused
import { NameContextProvider } from '../context/NameContext';

export const ContextProviders = ({ children }) => {
  return <NameContextProvider>{children}</NameContextProvider>;
};
