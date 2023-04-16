import React, { useState, useEffect } from "react";

import { useParams,NavLink } from "react-router-dom";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star";
import { addToCart } from "../../redux/action/action";
import {useDispatch } from "react-redux";


const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        //   console.log(response);
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleAddToCart = (item) => {
    // console.log('Add to cart')
    dispatch(addToCart(item));
  };







  return (
    <div className="container  min-vh-100 py-5" style={{marginTop:"8rem"}}>
      <div className="row py-4 p-5 shadow">
        {loading ? (
           <h3>loading...</h3>
        ) : (
          <>
            <div className="col-md-6 col-sm-12 product">
              <img
                src={product.image}
                alt={product.title}
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="text-uppercase text-black-50">
                {product.category}
              </h4>
              <h4 className="display-5">{product.title}</h4>
              <p className="lead fw-bolder">
                Rating{product.rating && product.rating.rate} <StarIcon />
              </p>
              <h4 className="display-6 fw-bold my-4">$&nbsp;{product.price}</h4>
              <p className="lead">{product.description}</p>
              <button type="button" className="btn btn-outline-dark px-4 py-2" onClick={()=> handleAddToCart(product)}>Add to Cart</button>
              <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2" onClick={() => console.log("Go to Cart")}>Go to Cart</NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
