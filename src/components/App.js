import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([])
  const [emptyPlatesArr, setEmptyPlatesArr] = useState([])
  const [money, setMoney] = useState(100)



function sendToEatenArr(item){
  console.log("working", item)
  if ((money-item[0].price) >= 0) {
    setMoney(money - item[0].price)
  } 
  setEmptyPlatesArr([...emptyPlatesArr, item[0]])
  console.log("plates:", emptyPlatesArr)
}


  useEffect(()=>{
    fetch(API)
    .then(res=> res.json())
    .then(data=> setSushiList(data))
  },[])

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList} sendToEatenArr={sendToEatenArr} money={money}/>
      <Table money={money} emptyPlatesArr={emptyPlatesArr}/>
    </div>
  );
}

export default App;
