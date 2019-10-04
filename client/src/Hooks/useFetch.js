import React from "react";
import useFetch from "react-fetch-hook";


const Component = () => {
    const { isLoading, data } = useFetch("https://swapi.co/api/people/1");
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <UserProfile {...data} />
    );
  };


const UserProfile = props => {
    console.log(props)
    return (
      <div className="fetch-container">
        <h2 className="h2">{props.name}</h2>
      </div>
       
    )
}

export default UserProfile;


