import { AppContextProvider } from "@/context/provider/AppContextProvider";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

import { authentication } from "@/services/firebase/authentication";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // declare the data fetching function
    const createAnonymousUser = async () => {
      await authentication.signInAnonymously();
    };

    // call the function
    createAnonymousUser()
      // make sure to catch any error
      .catch(console.error);
  }, []);
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
