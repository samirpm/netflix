import React, { useEffect ,useState} from "react";
import './Banner.css'
import axios from "../axios";
import requests,{imageUrl} from "../Request"; 

function Banner() {
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        axios.get(requests.trending).then((response)=>{
            setMovie(response.data.results[
                Math.floor(Math.random() * response.data.results.length -1)
            ])
            console.log(response.data.results[0])
        })
    },[])
    return (
        
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}}
         className="banner" >
            <div className="content">
                <h1 className="title">{movie? movie.title:''}</h1>
                <div className="banner_buttons">
                    <button className="button" >Play</button>
                    <button className="button" >My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview:''}</h1>
                <div className="fade"></div>
            </div>
        </div>
    )
}
export default Banner
