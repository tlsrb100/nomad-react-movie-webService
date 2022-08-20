import {Link} from 'react-router-dom'; 

function Movie({id, coverImg, title, summary, genres}) {
  return <div>
  <img src={coverImg} alt={title}/>
  <Link to={`/movie/${id}`}>{title}</Link>
  <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
  <ul>
    {genres.map((g)=><li key={g}>{g}</li>)}
  </ul>
  </div>
};



export default Movie;