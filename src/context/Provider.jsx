import { useState } from "react";
import AppContext from "./App.context";

function Provider({ children }) {

  const [client, setClient] = useState([]);

  const value = {
    client,
    setClient
  }

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>;
}

export default Provider;
