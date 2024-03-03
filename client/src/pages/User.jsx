import { AiFillPlayCircle } from "react-icons/ai";
import { VotingContext } from "../context/VotingContext";
import React, { useContext, useEffect } from "react";
import { logout,reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function User() {
  const {
    currentAccount,
    contract,
    ethereum,
    election,
    setElection
    
  } = useContext(VotingContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  


  const getEleState = async () => {
    try {
      if (ethereum) {
        const eleSt = await contract.getElectionState();

        console.log(`Add Candidate: Loading - ${eleSt.hash} ....`);
  
        console.log(`Add Candidate: Success - ${eleSt.hash} ....`);
        setElection(eleSt)
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  }
  useEffect(() => {
    console.log(election);
  }, [])

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>





   <div>election:{election}</div>
      <p className="font-light text-sm">{currentAccount}</p>
      <button onClick={()=>setElection(3)}>Logout</button>
    </div>
  );
}
