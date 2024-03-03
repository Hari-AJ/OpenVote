import React, { useContext, useEffect, useState } from "react";
import { VotingContext } from '../../context/VotingContext';
import Navbar from "./Navbar";

export default function AddCandidate() {
  const {

    ethereum,
    contract
  } = useContext(VotingContext);

  const [partyName, setPartyName] = useState("");
  const [candidateName, setCandidateName] = useState("");
  
  const [partyLogo, setPartyLogo] = useState("");
  const [candidateLogo, setCandidateLogo] = useState("");

  const handleCandidate = async () => {
    try {
      if (ethereum) {
        const addCadidate = await contract.addCandidate(partyName,candidateName, partyLogo, candidateLogo );

        console.log(`Add Candidate: Loading - ${addCadidate.hash} ....`);
        await addCadidate.wait();
        console.log(`Add Candidate: Success - ${addCadidate.hash} ....`);
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="">
        <div>
          <label>Party Name</label>
          <input
            type="text"
            onChange={(e) => {
              setPartyName(e.target.value);
            }}
            value={partyName}
          />
        </div>
        <div>
          <label>Candidate Name</label>
          <input
            type="text"
            onChange={(e) => {
              setCandidateName(e.target.value);
            }}
            value={candidateName}
          />
        </div>
        <div>
          <label>Party Logo</label>
          <input
            type="text"
            onChange={(e) => {
              setPartyLogo(e.target.value);
            }}
            value={partyLogo}
          />
        </div>
        <div>
          <label>Candidate Logo</label>
          <input
            type="text"
            onChange={(e) => {
              setCandidateLogo(e.target.value);
            }}
            value={candidateLogo}
          />
        </div>


        <button onClick={handleCandidate}>Add Candidate</button>
      </div>
    </div>
  )
}
