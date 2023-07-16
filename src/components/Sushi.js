import React, {useState} from "react";



function Sushi({name, img_url, price, eatSushi, money}) {

  const [isEaten, setIsEaten] = useState(false)

  function takeSushi(){
    if (money >= price){
      setIsEaten(true)
      eatSushi(name)
    } else {
      alert ("sorry, that's too expensive")
    }
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
