import { createContext, useContext } from "react";

const SnarkyContext = createContext(false);

interface SnarkyProps {
  loaded: boolean;
  children: React.ReactNode;
}

export function SnarkyProvider(props: SnarkyProps) {
  const { loaded, children } = props;
  return (
    <SnarkyContext.Provider value={loaded}>{children}</SnarkyContext.Provider>
  );
}

export function useSnarkyContext() {
  return useContext(SnarkyContext);
}
