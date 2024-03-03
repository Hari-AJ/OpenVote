import React, { useContext, useEffect, useState } from 'react'
import { VotingContext } from '../../context/VotingContext';
export default function Receipt() {

    const [partyName, setPartyName] = useState(null);
    const [candidateName, setCandidateName] = useState(null);
    const [timeStamp, setTimeStamp] = useState(null);

    const { receiptID, contract } = useContext(VotingContext);

    const getVoterBill = async () => {

        try {
            if (ethereum) {
                console.log(receiptID)
                const voterBill = await contract.getVoterBill(receiptID);

                console.log(`Add Candidate: Loading - ${voterBill.hash} ....`);

                console.log(`Add Candidate: Success - ${voterBill.hash} ....`);
                console.log(voterBill)
                setPartyName(voterBill[0])
                setCandidateName(voterBill[1])
                setTimeStamp(voterBill[2].toNumber())
            } else {
                console.log("No ethereum object");
            }
        } catch (error) {
            console.log(error);

            throw new Error("No ethereum object");
        }
    }

    const date = new Date(timeStamp * 1000);

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC' // Adjust to your desired time zone
    };

    const formattedDate = date.toLocaleString('en-US', options);

    useEffect(() => {
        getVoterBill()
    }, [])
    return (
        <div>
            <div>{partyName}</div>
            <div>{candidateName}</div>

            <div>{formattedDate}</div>

        </div>
    )
}
