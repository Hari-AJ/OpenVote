import React, { useContext, useEffect, useState } from "react";
import { VotingContext } from "../../context/VotingContext";
import Navbar from "./Navbar";

export default function ElectionState() {
  const { startElection, endElection, refreshElection } =
    useContext(VotingContext);

  return (
    <div>
      <Navbar />
      <div className=" flex flex-row items-center justify-center h-screen ">
        <button  className='rounded-md bg-black text-white py-3 px-5 mx-3' onClick={startElection}>Start Election</button>
        <button onClick={endElection} className='rounded-md bg-black text-white py-3 px-5 mx-3'>End Election</button>
        <button onClick={refreshElection} className='rounded-md bg-black text-white py-3 px-5 mx-3'>Reset Election Data</button>
      </div>
    </div>
  );
}
