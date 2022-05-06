import { AppContextProvider } from "@/context/provider/AppContextProvider";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRouter";

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
