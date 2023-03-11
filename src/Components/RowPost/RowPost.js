import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../Constants/Constant'
import './RowPost.css'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([])
const[urlId,setUrlId]=useState('')

  useEffect(() => {
    axios.get(props.Url).then((response) => {
      console.log(response.data.results[13])
      setMovies(response.data.results)
    }).catch(err => {
      // alert("Network Error")
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
      // console.log(response.data)
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("Array is empty")
      }

    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>

          <img onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} />

        )}
      </div>

   {  urlId && <YouTube opts={opts} videoId={urlId.key} />  }

    </div>
  )
}

export default RowPost
