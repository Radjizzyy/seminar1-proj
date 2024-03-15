function MovieItem(props){
    return (
        <>
            <div  className='movie-parent'  key={props.movieDetails.imdbID}>  
               
               <img src={props.movieDetails?.Poster !== "N/A" ? props.movieDetails.Poster : "https://via.placeholder.com/600/d32776"} />
               <h2>{props.movieDetails.Title}</h2>
               <p>{props.movieDetails.Year}</p>
             </div>
        </>
    )
}

export default MovieItem