import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([])

  useEffect(()=>{
    fetch(API)
    .then(res=> res.json())
    .then(data=> setSushiList(data))
  },[])

  return (
    <div className="app">
      <SushiContainer sushiList={sushiList}/>
      <Table />
    </div>
  );
}

export default App;
