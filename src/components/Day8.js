import React,{useState}from "react";
import { useEffect } from "react";


export default function Day8() {
    const[msg,setmsg]=useState("Hello dear one,learning React...?")
  
   useEffect(()=>{
        console.log('ONE DAY ONE LIFE!!!');
        setTimeout(()=>{
            setmsg("WHAT A WONDERFUL DAY");
        },11000)
    })
    return (
    <div><p>{msg}</p></div>
  )
}