import axios from "axios";
import './Button.css';
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [filter, setFilter] = useState(product);
  const [loding, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        if (isMounted) {
          console.log(response);
          setProduct(response.data);
          setFilter(response.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log(error));

    return () => {
      isMounted = false;
    };
  }, []);

  const filterProduct = (cate)=>{
    const updateList = product.filter((p)=> p.category === cate);
    setFilter(updateList);
  }



  return (
    <div className="container-flued px-5 py-5" style={{marginTop:'5rem'}}>
      <div className="row">
        <div className="col-lg-12 col-sm-12  mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loding ? (
         <h3>loading...</h3>
        ) : (
          <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=> setFilter(product)}>
              All
            </button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=> filterProduct("men's clothing")}>
              Men's Clothing
            </button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=> filterProduct("women's clothing")}>
              Women's Clothing
            </button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=> filterProduct("jewelery")}>
              Jewelery
            </button>
            <button type="button" className="btn btn-outline-dark me-2" onClick={()=> filterProduct("electronics")}>
              Electronic
            </button>
          </div>
        )}
        {filter.map((item) => {
          return (
            <div className="col-md-3 col-sm-12 mb-4" key={item.id}>
              <div className="card h-100 p-4 text-center">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  height="250px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {item.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text lead fw-bold">$&nbsp;{item.price}</p>
                  <NavLink to={`/productdetail/${item.id}`} className="btn btn-outline" >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
