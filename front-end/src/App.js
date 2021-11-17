import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./layout/AppContainer";
import { AuthContextProvider, CartContextProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <CartContextProvider>
          <AppContainer />
        </CartContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
