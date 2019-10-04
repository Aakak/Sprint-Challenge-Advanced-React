import React from 'react';
import axios from "axios";
import PlayersData from "./Components/PlayersData";
import Navbar from "./Components/Navbar";
import useFetch from "./Hooks/useFetch";
import './App.css';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      PlayersData: []
    };
    console.log("Constructor is running!");
  }


componentDidMount () {
  axios 
  .get("http://localhost:5000/api/players?per_page=7")
  .then(res => {
    this.setState({
      PlayersData: res.data,
      // FollowersCards: this.state.FollowersCards
    });
  })
  .catch(err => console.log(err));
  console.log("Axios is running")
}

render () {
  console.log("rendering");
  return (
    <div className="App">
     <Navbar />
     <h1 className="main-h1">Women's World Cup players</h1>
     <h4 className="main-h4">Google Search Trends June-July 2019</h4>
    {this.state.PlayersData.map(function(player) { 
      console.log(player.name);
       return <PlayersData { ...player } />
      }
    )} 
    </div>
  )
}
}
export default App;