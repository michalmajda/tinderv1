import "./Cards.css";
import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import { People } from "./People";


function Cards() {
    

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + "left the screen !");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {People.map((person) =>(
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.image})` }} className="card">
                            <h3>{person.name},{person.age}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>        
        </div>
    );
}

export default Cards;