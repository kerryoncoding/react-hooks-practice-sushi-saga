import React, {useState} from "react";
import Sushi from "./Sushi"
import MoreButton from "./MoreButton";

function SushiContainer({sushiList}) {

  const [count, setcount] = useState(4)

  console.log("passed Array:", sushiList)

  const filterSushi = sushiList.filter((item)=> (item.id > count-4) && (item.id <= count))
  
  console.log(filterSushi)

  function showMoreSushi(){
    console.log("I've been clicked")
    setcount(()=> count + 4)
  }




  const showSushi = filterSushi.map((item)=> {
    return <Sushi 
    key= {item.id}
    id = {item.id}
    name= {item.name}
    img_url= {item.img_url}
    price= {item.price}
    />
  })



  return (
    <div className="belt">
      {showSushi}
      <MoreButton showMoreSushi={showMoreSushi} />
    </div>
  );
}

export default SushiContainer;
