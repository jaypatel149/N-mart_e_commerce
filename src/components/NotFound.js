import React,{useState} from "react";
import { Navigate } from 'react-router-dom';



const NotFound = () => {

    const [redirect, setRedirect] = useState(false);


    const handleRedirect = () => {
        setRedirect(true);
      }
    
      if (redirect) {
        return <Navigate to="/" replace={true} />;
      }
    

  return (
    <div className="vh-100 d-flex align-items-center">
      <div className="container text-center">
        <div className="py-5">
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <button className="btn btn-outline-dark mt-4" onClick={handleRedirect}>Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
