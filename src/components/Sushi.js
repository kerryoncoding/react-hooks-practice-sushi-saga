import React, {useState} from "react";



function Sushi({name, img_url, price}) {

  const [isEaten, setIsEaten] = useState(false)

  function takeSushi(){
    console.log("taken")
    setIsEaten(true)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={takeSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={img_url}
            alt={`${name} image`}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
