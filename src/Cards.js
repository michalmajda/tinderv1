import "./Cards.css";
import React from "react";
import TinderCard from "react-tinder-card";
import { People } from "./People";


function Cards() {
    
    const onSwipe = (direction) => {
        console.log("Przesunales w " + ((direction==='right') ? 'prawo' : 'lewo'));
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + " oceniona");
    };

    return (
        <div className="cards"> 
                {People.map((person) =>(
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => onSwipe(dir)}
                        onCardLeftScreen={() => onCardLeftScreen(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.image})` }} className="tinder-card">
                            <h1>{person.name}, {person.age}</h1>
                        </div>
                    </TinderCard>
                ))}          
        </div>
    );
}

export default Cards;