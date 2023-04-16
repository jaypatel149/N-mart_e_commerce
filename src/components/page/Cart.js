
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { deleteCart,incrementQuantity ,decrementQuantity} from "../../redux/action/action";


const Cart = () => {
  const cartItems = useSelector((state) => state.reducer.carts);
  // console.log(cartItems,"cartdetails.......jaypatel.........")
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(incrementQuantity(item))
  };
  
  const handleRemove = (item) => {
    dispatch(decrementQuantity(item))
  };


// delete cartItems 
  const handleDelete = (productId) => {
    dispatch(deleteCart(productId));
  };


  return (
    <div className="container mb-5 pt-5" style={{ marginTop: "6rem" }}>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="row py-4 p-5 shadow" key={item.id}>
            <div className="col-md-6 col-sm-12 product">
              <img
                src={item.image}
                alt={item.title}
                height="350px"
                width="350px"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <h4 className="text-uppercase text-black-50">{item.category}</h4>
              <h5 className="display-5">{item.title}</h5>
              <p className="lead fw-bolder">
                Rating: {item.rating.rate} <StarIcon style={{ color: '#e68100' }} /><StarIcon style={{ color: '#e68100' }}/><StarIcon style={{ color: '#e68100' }}/>
              </p>
              <p className="display-6 fw-bold my-3">
                Price:
                <CurrencyRupeeIcon />
                {item.price}
              </p>
              <p className="display-6 fw-bold my-3">
              Quantity: {item.quantity ? item.quantity : 0}
              </p>
              <p className="display-6 fw-bold my-4">
                Total:
                <CurrencyRupeeIcon />
                {item.quantity ? item.quantity * item.price : 0}
              </p>
              <button type="button" className="btn btn-outline-dark me-3" onClick={() => handleRemove(item)}>
                <HorizontalRuleIcon />
              </button>
              <button type="button" className="btn btn-outline-dark me-3" onClick={() => handleAdd(item)}>
                <AddIcon />
              </button>
              <button type="button" className="btn btn-outline-dark me-5" onClick={() => handleDelete(item.id)}>
                <DeleteIcon color="error" fontSize="medium" />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="row py-4 p-5 shadow">
          <div className="col-md-12 col-sm-12 text-center">
            <h3>Your Cart is Empty!</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;





// const handleRemove = (item) => {
//   const newQty = item.qty - 1;
//   if (newQty === 0) {
//     dispatch(deleteCart(item.id));
//   } else {
//     dispatch(updateCart(item.id, { qty: newQty }));
//   }
// };

// const handleAdd = (item) => {
//   const newQty = item.qty + 1;
//   dispatch(updateCart(item.id, { qty: newQty }));
// };

