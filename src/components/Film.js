


const Film = ({film}) => {
    return (
        <>
        <h2>{film.title}</h2>
                <p>{film.duration}</p>
                <ul>
                    {film.cast.map((cast, index) => {
                         return (
                            <li>{cast.name}</li>
                         )
                })}</ul>
        </>
    )

}
export default Film;