
// FILM DETAIL COMPONENT WHICH CONTAINS TITLE, DURATION,RATING, LIST OF CAST AND DIRECTORS

// create a function that takes the 
// {film} is a prop 
const Film = ({film}) => {
   

// returning all the elements for each film within the films array 

// <hr /> - visual line break 
    return( 
        <div className='film-container'>
            <h2 className="title">Film Title: {film.title}</h2>
            <h3>Duration: {film.duration}</h3>
            <h3>Rating: {film.rating}</h3>
        
            <hr />
            <h3>Starring: </h3>
            <p>Actors: </p>
            <ul key={film.cast}>{film.cast.map(actor =>{
                return <li key={actor.name}>{actor.name}</li>
            })}
            </ul>
            <hr />
            <h3>Directed by: </h3>
            <h4>{film.director.name}</h4>

        </div>
    )

}

export default Film; 