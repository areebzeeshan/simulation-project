import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import videoFile from '../assests/videos/abstract.webm';


const MM1Model = () => {
  const [arrivalMean, setArrivalMean] = useState(0);
  const [serviceMean, setServiceMean] = useState(0);
  const [InterArrivalMean, setInterArrivalMean] = useState(0);
  const [avalue, setavalue] = useState(1);
  const [bvalue, setbvalue] = useState(3);
  const [Avalue, setAvalue] = useState(55);
  const [Cvalue, setCvalue] = useState(9);
  const [Zvalue, setZvalue] = useState(10112166);
  const [Mvalue, setMvalue] = useState(1994);


  const handleSimulate = () => {
    // Pass arrivalMean and serviceMean as query parameters in the link
    const searchParams = new URLSearchParams({
      InterArrivalMean,
      arrivalMean,
      serviceMean,
      avalue,
      bvalue,
      Avalue,
      Cvalue,
      Zvalue,
      Mvalue

    });

    // Generate the link URL with query parameters
    const linkURL = `/simulationmm1?${searchParams.toString()}`;

    // Navigate to the simulation page using the link
    window.location.href = linkURL;
  };

  return (
    <div className="relative flex justify-center items-center h-screen">
      <video
        src={videoFile}// Replace with the path to your animation video file
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      ></video>
      <div className="relative z-20 w-1/2 bg-gray-200 rounded-xl shadow-xl p-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl text-center text-red-800 font-bold">MM1 Model Simulation</h2>
          <p className="text-sm text-center  text-gray-500 italic">Enter arrival and service means to simulate the MM1 model:</p>
        </div>
        <div className="mb-8 text-center">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="arrivalMeanInput">
            InterArrival Mean:
          </label>
          <input
            id="arrivalMeanInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={InterArrivalMean}
            onChange={(e) => setInterArrivalMean(e.target.value)}
          />
        </div>
        <div className="mb-8 text-center">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="arrivalMeanInput">
            Arrival Mean:
          </label>
          <input
            id="arrivalMeanInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={arrivalMean}
            onChange={(e) => setArrivalMean(e.target.value)}
          />
        </div>


        <div className="mb-8 ">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
            Service Mean:
          </label>
          <input
            id="serviceMeanInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={serviceMean}
            onChange={(e) => setServiceMean(e.target.value)}
          />
        </div>
        <div className="mb-8 ">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
           Enter Lower Limit: 
          </label>
          <input
            id="avalueInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={avalue}
            onChange={(e) => setavalue(e.target.value)}
          />
        </div><div className="mb-8 ">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
           Enter Upper Limit:
          </label>
          <input
            id="bvalueInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={bvalue}
            onChange={(e) => setbvalue(e.target.value)}
          />
        </div><div className="mb-8 ">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
            Enter Value of A:
          </label>
          <input
            id="AvalueInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={Avalue}
            onChange={(e) => setAvalue(e.target.value)}
          />
        </div>
        <div className="mb-8 ">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
            Enter Value of C: 
          </label>
          <input
            id="CvalueInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={Cvalue}
            onChange={(e) => setCvalue(e.target.value)}
          />
        </div>
        <div className="mb-8 ">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
            Enter Value of Z: 
          </label>
          <input
            id="ZvalueInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={Zvalue}
            onChange={(e) => setZvalue(e.target.value)}
          />
        </div>
        <div className="mb-8 ">
          <label className="block mb-2 text-xl font-bold text-center" htmlFor="serviceMeanInput">
            Enter Value of M: 
          </label>
          <input
            id="MvalueInput"
            type="number"
            className="w-96 p-2 border text-center  rounded-xl border-gray-400 mx-56 width-center"
            value={Mvalue}
            onChange={(e) => setMvalue(e.target.value)}
          />
        </div>
        
        <div className="mb-8 text-center">
          <Link
            to="/simulationmm1"
            onClick={handleSimulate}
            className="w-96 bg-red-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mx-56"
          >
            Simulate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MM1Model;
