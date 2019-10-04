import React from "react";

const PlayersData = props => {
    console.log(props)
    return (
      <div className="players-container">
        <div className="players-info">
        <h2 className="h2">{props.name}</h2>
        <p className="text-content">Country: {props.country}</p>
        <p className="search-content">Searches: {props.searches}</p> 
        </div>
        </div>
    )
}

export default PlayersData;
