import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import Store from "./Store/Store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
function App() {
  const persistor = persistStore(Store);

  return (
    <>
      <div className="App">
        <Provider store={Store}>
          <PersistGate
            loading={
              <div>
                <h1>Loading...</h1>
              </div>
            }
            persistor={persistor}
          >
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
              </Routes>
            </BrowserRouter>
          </PersistGate>
        </Provider>
      </div>
    </>
  );
}

export default App;
