import React from 'react'
import {useParams}from"react-router-dom"
export default function Img() {
    const param=useParams();
  return (
    <div className='img'>
        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_KTeqlh0PGUcrJm48Y3LMU_VYd1aosuvng&usqp=CAU"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq01ZCJE0poVYBYKqBWuB3pT94F4Ky-YnF-Q&usqp=CAU"></img>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDOnBzfWP9DwjbPU1s0rZFKXByjzRd1EIqg&usqp=CAU"></img> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIt8mEYb2FGC3Q2vIpSGD9XzAZD-gSAZXhQ&usqp=CAU"></img><br></br>
        <div className='img2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRILgCDTOmwEpkwwyE8QdKE6oP1TFcs3ccB4A&usqp=CAU"></img>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDFbpganQcNs0X345f8EW_WrMLKTBSLG5SQ&usqp=CAU"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfXHJUQSqjMrwOvLSPIxIVZ4q4h7UWCGR2w&usqp=CAU"/>
        </div>
    </div>
  )
}
