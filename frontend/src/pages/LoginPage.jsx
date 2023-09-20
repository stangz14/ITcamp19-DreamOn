import React from "react";
import pb from "../connectors/pb";
import Loginform from "../component/Loginform";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  return (
    <div
      className=""
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/1114157194137583681/1114419733853380638/b8a9583eef43d044.gif")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <Loginform />
    </div>
  );
}

export default LoginPage;
