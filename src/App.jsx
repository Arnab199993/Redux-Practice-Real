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
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Provider store={Store}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    </>
  );
}

export default App;
