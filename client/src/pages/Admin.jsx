import { AiFillPlayCircle } from "react-icons/ai";
import { VotingContext } from "../context/VotingContext";
import React, { useContext, useEffect, useState } from "react";
import AddCandidate from "../components/admin/AddCandidate";
import AddVoter from "../components/admin/AddVoter";
import ElectionState from "../components/admin/ElectionState";
import RealTally from "../components/admin/RealTally";
import Navbar from "../components/admin/Navbar";


export default function Admin() {
  const {
    currentAccount,
    connectWallet,
   
  } = useContext(VotingContext);
 





  return (
    <div>

   <Navbar />
     
      {!currentAccount && (
        <button
          type="button"
          onClick={connectWallet}
          className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <AiFillPlayCircle className="text-white mr-2" />
          <p className="text-white text-base font-semibold">Connect Wallet</p>
        </button>
      )}
      <p className="font-light text-sm">{currentAccount}</p>

      
    
    </div>
  );
}
