import React from "react";

function RatingView({ point }) {
  // <i className="bi bi-star"></i>
  //     <i className="bi bi-star-fill"></i>
  //     <i className="bi bi-star-half"></i>
  const starFull = new Array(Math.floor(point)).fill(null).map((item, index) => {
    return <i className="bi bi-star-fill" key={index}></i>;
  });

  const starHalf = point - Math.floor(point) > 0 ? <i className="bi bi-star-half"></i> : null;

  const star = new Array(5 - Math.ceil(point))
    .fill(null)
    .map((item, index) => <i className="bi bi-star" key={index}></i>);

  return (
    <div style={{ color: "#ffc107" }}>
      {starFull}
      {starHalf}
      {star}
    </div>
  );
}

export default RatingView;
