import React,{useState, useEffect} from "react";
import {IPOP} from '../types/interface'
import axios from 'axios'
const URL='https://api.themoviedb.org/3/discover/movie?api_key=76b95fc637c6fa8f9272a1e4a0f3aa50&with_genres=10749&with_watch_providers=8&watch_region=PH'
const Home: React.FC = () => {
    const [popularData, setPopularData] = useState([])
    
    useEffect(() => {
        axios
         .get(URL)
         .then((response) => {
           console.log(response.data)
           setPopularData(response.data)
      })
        }, [])
  return (
    <div className="Home">
    
    </div>
  );
};

export default Home;