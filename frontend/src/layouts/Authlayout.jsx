import React from "react";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (JSON.parse(localStorage.getItem("items")) ) {
        
    } else {
      navigate("/");
    }
  }, []);

  return <>{children}</>;
};

export default AuthLayout;
