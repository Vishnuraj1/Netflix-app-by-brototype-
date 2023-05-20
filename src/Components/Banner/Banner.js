import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constant'
import './Banner.css'
import axios from '../../axios'



function Banner() {
  const [movie,setMovie]= useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data.results[8])
      // console.log(response.data.results[0].name    )
      setMovie(response.data.results[11])
     
    })
  },[])
  return (
   
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :''})`}} className='banner'>
      <div className="content">
        <h1 className='title'>{movie ? movie.title ? movie.title : movie.name :''}</h1>
        <div className="banner-buttons">
            <button className='btn btn1'>Play</button>
            <button className='btn btn2'>My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
