import React, { useEffect, useState } from "react";
import './NavBar.css'
 function NavBar(){ 
   
    const[show,setShow]=useState(false)
    // useEffect(()=>{
    //     // window.addEventListener("scroll",()=>{
    //         // if(window.scrollY >100){
    //             // setShow(true);
    //         // }else{
    //             // setShow(false);
    //         // } 
    //     });
    //     return () =>{
    //         window.removeEventListener("scroll");
    //     };
    // }[])
    useEffect(()=>{
        window.removeEventListener=()=>undefined
        window.addEventListener('scroll',()=>{
            const y = window.scrollY;
            if(y > 100){
                setShow(true);
            }
            else{
                setShow(false);
            }
        })
        return()=>window.removeEventListener("scroll")
    }, [])
    return(
        <div className={show ? 'navbarblack':  `navbar`}>
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            <img className="avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU" alt="" />
        </div>
    )
 }
 export default NavBar