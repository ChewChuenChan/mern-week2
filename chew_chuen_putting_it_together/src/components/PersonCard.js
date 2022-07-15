import { useState } from "react";

const PersonCard = (props) => {
    //destructuring
    const {firstName,lastName,age,hairColor} = props;
    // getters & setters
    const [stateAge,setStateAge]= useState (age);

    const changeValue = () => {
        console.log("Added 1");
        setStateAge(stateAge + 1);
    }

    return(
        <div className ="container">
            <h1 className="title">{lastName}, {firstName} </h1>
            <h4 className="list">Age: {stateAge}</h4>
            <h4 className="list">Hair Color: {hairColor}</h4>
            {/* synthetic event */}
            <button onClick={changeValue}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}

export default PersonCard;