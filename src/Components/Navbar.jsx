// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// const Navbar = () => {
//   const items = useSelector((state) => state.cart);
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div className="burger" onClick={toggleMenu}>
//           &#9776;
//         </div>
//         <span>Redux Store</span>

//         <div className={`sideDrawer ${showMenu ? "open" : ""}`}>
//           <Link className="navLink" to={"/"} onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link className="navLink" to={"/cart"} onClick={toggleMenu}>
//             Cart
//           </Link>
//         </div>

//         <span className="cartCount">cart items: {items.length}</span>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(false);
  const sideDrawerRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        sideDrawerRef.current &&
        !sideDrawerRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="burger" onClick={toggleMenu}>
          &#9776;
        </div>
        <span>Redux Store</span>
        <div
          className={`sideDrawer ${showMenu ? "open" : ""}`}
          ref={sideDrawerRef}
        >
          <Link className="navLink" to={"/"} onClick={toggleMenu}>
            Home
          </Link>
          <Link className="navLink" to={"/cart"} onClick={toggleMenu}>
            Cart
          </Link>
        </div>

        <span className="cartCount">cart items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
