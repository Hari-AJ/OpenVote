import React from 'react'
import { AiFillPlayCircle } from "react-icons/ai";
import { VotingContext } from '../../context/VotingContext';
import { useContext } from 'react';
export default function VoteNow() {

    const {
        currentAccount,
        connectWallet,
        votehandler,
        candidates,
      
      } = useContext(VotingContext);


  return (
    <div>
    
{candidates.map((item, index) => (
        <div key={index}>
          <div>{item.partyName}</div>
          <div>{item.candidateName}</div>
          <img src={`/assets/images/${item.partyLogo}`} className="w-16" />
          <img src={`/assets/images/${item.candidateLogo}`} className="w-32 h-32 object-cover rounded-full" />
          <button onClick={() => votehandler(index)}>Vote</button>
        </div>
      ))}

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
    </div>
  )
}
