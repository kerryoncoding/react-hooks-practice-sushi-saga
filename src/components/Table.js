import React from "react";

function Table({emptyPlatesArr, money }) {
  // renders an empty plate for every element in the array
  const plates = emptyPlatesArr.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{plates}</div>
      </div>
    </>
  );
}

export default Table;
