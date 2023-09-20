import React from "react";
import ReviewForm from "../component/ReviewForm";
import pb from "../connectors/pb";

function ReviewPage() {
  return (
    <div
      style={{
        backgroundImage: `url("https://cdn.discordapp.com/attachments/1114157194137583681/1114419733853380638/b8a9583eef43d044.gif")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <ReviewForm />
    </div>
  );
}

export default ReviewPage;
