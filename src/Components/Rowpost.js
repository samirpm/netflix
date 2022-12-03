import React, { useEffect, useState } from "react";
import './Rowpost.css'
import axios from '../axios'
import { imageUrl, } from "../Request";
import YouTube from "react-youtube";
function Rowpost(props) {
    const [movie, setMovie] = useState([])
    const [urlId,seturlId]=useState('')
    useEffect(() => {
        axios.get(props.url).then((response) => {
            setMovie(response.data.results)
           
        })
    }, [])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1
        }
    }
    const handleMovie = (id) => {
        console.log(id)
        if(urlId){
            seturlId('')
        }else{

            axios.get(`/movie/${id}/videos?api_key=3b2c20ba3274aef55fdf2285eb040cee&language=en-US `).then(response=>{
              console.log(response.data.results.key)
                if(response.data.results.length !== 0){
                    
                  seturlId(response.data.results[0])
                }
                else{
                  console.log("no working")
                }
            })
        }
    }
    return (

        <div className="row">
            <h2 className="">{props.title}</h2>
            <div className="poster">
                {movie.map((obj) =>
                    <img onClick={() =>handleMovie(obj.id) } className={props.isSmall ? 'smallimage' : "image"} src={props.isLarge?`${imageUrl+obj.poster_path}`:`${imageUrl + obj.backdrop_path}`} alt="" />

                )}

            </div>
              {urlId && <YouTube videoId={urlId.key} opts={opts} />}
           
           

        </div>
    )
}
export default Rowpost