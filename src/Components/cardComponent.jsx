import React from "react";

const CardComponent = (props) => {
    const {title,description} = props
  return (
    <>
      <div className="m-4">
        <div className="card" style={{ width: "300px", height: "500px"}}>
          <img src="https://picsum.photos/50" className="crad-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button className="btn btn-primary">Go</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardComponent;
