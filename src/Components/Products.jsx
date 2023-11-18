import React, { useEffect, useState } from "react";
import { add } from "../Store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/ProductSlice";
import { STATUSES } from "../Store/ProductSlice";
const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);
  const { data: Product, status } = useSelector((state) => state.product);

  const fetchProductsList = async () => {
    dispatch(fetchProducts());
    // try {
    //   const url = "https://fakestoreapi.com/products";
    //   let response = await fetch(url);
    //   response = await response.json();
    //   if (response) {
    //     setProducts(response);
    //   }
    // } catch {
    //   console.log("No Data Found");
    // }
  };
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  useEffect(() => {
    fetchProductsList();
  }, []);
  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }
  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  return (
    <div>
      {Product?.length ? (
        <div className="productsWrapper">
          {Product?.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.image} />
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button onClick={() => handleAdd(item)} className="btn">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>No data found</h1>
        </div>
      )}
    </div>
  );
};

export default Products;
