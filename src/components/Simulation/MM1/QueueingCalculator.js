import React from "react";

const QueueingCalculator = ({ QueueingCalulate }) => {
    console.log("hello")
    console.log(QueueingCalulate)
  return(
<div className="text-white">
    <div className="container">
        <h1 className="text-3xl">Queueing Calculator</h1>
        <h3 className="text-xl">Wait time of Queue : {QueueingCalulate[0].toFixed(2)}</h3>
        <h3 className="text-xl">Wait time of System : {QueueingCalulate[1].toFixed(2)}</h3>
        <h3 className="text-xl">Length of System : {QueueingCalulate[2].toFixed(2)}</h3>
        <h3 className="text-xl">Length of Queue : {QueueingCalulate[3].toFixed(2)}</h3>
    </div>
</div>
  ) 
};

export default QueueingCalculator;
