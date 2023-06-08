import React from "react";
import NavComponent from "./navComponent";
import CardComponent from "./cardComponent";

const MainComponent = () => {
  const data = {
    apple: {
      title: "Apple co",
      description:
        "Apple is a technology company known for its innovative products.",
    },
    samsung: {
      title: "Samsung co",
      description:
        "Samsung is a multinational conglomerate company based in South Korea.",
    },
    motorola: {
      title: "Motorola co",
      description:
        "Motorola is a multinational telecommunications company known for its mobile phones.",
    },
  };
  return (
    <>
      <NavComponent />
      <div className="container">
        <div className="d-flex flex-row mb-3 justify-content-center">
          <CardComponent
            title={data.apple.title}
            description={data.apple.description}
          />
          <CardComponent
            title={data.samsung.title}
            description={data.samsung.description}
          />
          <CardComponent
            title={data.motorola.title}
            description={data.motorola.description}
          />
        </div>
      </div>
    </>
  );
};

export default MainComponent;
