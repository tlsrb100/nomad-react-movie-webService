import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

function Detail(){
  const {id} = useParams();
  const [json, setJson] = useState();
  const [loading, setLoading]= useState(true);
  const getMovie = async()=>{
    const data = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await data.json();
    console.log(json);
    setJson(json.data.movie);
    setLoading(false);
  };
  
  useEffect(()=>{
    getMovie();
  },[]);


  return <div>
    {loading ? <h1>Loading...</h1> : <div>
    <img src={json.medium_cover_image} alt={json.title_long}></img>
    <div>{json.title_long}</div>
    <div>{json.genres}</div>
    <div>{json.rating}</div>
    <div>{json.date_uploaded}</div>
    <div>{json.description_intro}</div>
  </div>}
</div>
};
export default Detail;