import React, { useContext, useEffect, useState } from "react";
import { VotingContext } from '../../context/VotingContext';
import Navbar from "./Navbar";
export default function RealTally() {

    const {
       
        candidates,
        getCandidates,
       
      } = useContext(VotingContext);
    
    
  useEffect(() => {
    getCandidates();
  }, []);


  return (
    <div>
        <Navbar />
        <div>
        {candidates.length === 0? (<div className="text-[30px]  flex justify-center items-center h-screen">No Elections happening now</div>):(
          candidates.map((item, index) => (
            <div key={index}>
              <div>{item.partyName}</div>
              <div>{item.candidateName}</div>
              <div>Votes: {item.votes}</div>
              <img src={`/assets/images/${item.partyLogo}`} />
              <img src={`/assets/images/${item.candidateLogo}`} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}
